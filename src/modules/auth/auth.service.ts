import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { HashService } from '../../utils/hashService';
import { LoginInput } from './dto/login-request.dto';
import { OtpService } from './otp.service';
import { RedisService } from '../../shared/redis.service';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
    private tokenKeyForRedis = 'AUTH-'
    constructor(
        private jwtService: JwtService,
        private userService: UserService,
        private otpService: OtpService,
        private readonly redisService: RedisService
    ) { }

    async login(loginInput: LoginInput) {
        return await this.loginUsingCredentials(loginInput);
    }

    async generateLoginTokens(payload: any) {
        if (payload) {
            const accessToken = this.jwtService.sign(payload.tokenDetails);
            const refreshToken = this.jwtService.sign({ id: payload.tokenDetails.id }, { expiresIn: '30d' });
            //----------------------------------------- TOKEN SET IN REDIS---------------------------------
            this.redisService.setex(this.tokenKeyForRedis + accessToken, 60 * 60 * 12, accessToken)
            this.redisService.setex(this.tokenKeyForRedis + refreshToken, 60 * 60 * 24 * 30, accessToken)
            return {
                token: accessToken,
                refreshToken,
                loginDetails: payload.user,
            }
        }
    }

    async logout(token: string): Promise<any> {
        try {
            token = token.replace('Bearer ', '')
            if (!token) {
                throw new Error("Invalid Token")
            }
            const redisKey = this.tokenKeyForRedis + token
            const deleteToken = await this.redisService.del(redisKey)
            return {
                status: 'Success',
                msg: 'Logout Successfully'
            }
        } catch (e) {
            throw new Error(e)
        }
    }

    // async loginUsingCredentials(loginInput: any) {
    //     let user
    //     if (loginInput.otp && loginInput.otpToken) {
    //         const verifyOtp = await this.otpService.verifyOtp({ token: loginInput.otpToken, otp: loginInput.otp })
    //         if (verifyOtp) {
    //             const user = verifyOtp.user
    //             return await this.generateLoginTokens({
    //                 user,
    //                 tokenDetails: {
    //                     id: user._id,
    //                     sub: user.password
    //                 }
    //             });
    //         } else {
    //             throw new BadRequestException("Invalid Otp")
    //         }
    //     }
    //     if (loginInput.rtoken) {
    //         const findTokenFromRedis = await this.redisService.get(this.tokenKeyForRedis + loginInput.rtoken)
    //         if (!findTokenFromRedis) {
    //             throw new Error("Invalid Token")
    //         }
    //         const tokenInfo = await this.jwtService.verifyAsync(loginInput.rtoken)
    //         if (tokenInfo && tokenInfo.id) {
    //             user = await this.userService.findOneByQueryForLogin({ _id: tokenInfo.id })
    //         }
    //     } else {
    //         user = await this.userService.findOneByQueryForLogin({
    //             $or: [
    //                 {
    //                     username: loginInput.username,
    //                 },
    //                 {
    //                     contact: loginInput.username,
    //                 }
    //             ],
    //             isActive: { $ne: false }
    //         });
    //     }


    //     if (user) {
    //         if (loginInput.rtoken) {
    //             return await this.generateLoginTokens({
    //                 tokenDetails: {
    //                     id: user._id,
    //                     sub: user.password,
    //                 },
    //                 user: user
    //             });
    //         }
    //         else if (loginInput.contact) {
    //             const contact = user.contact
    //             const sendOtpMessage = await this.otpService.otpLogin({ contact, user: user })
    //             return sendOtpMessage
    //         }
    //         else {

    //             const isvalidated = await HashService.validateHash(
    //                 loginInput.password,
    //                 user.password,
    //             );
    //             //two verfication not enabled then login directly
    //             if (isvalidated) {
    //                 if (user.isLoginOtp) {
    //                     const contact = user.contact
    //                     const sendOtpMessage = await this.otpService.otpLogin({ contact, user: user })
    //                     return sendOtpMessage
    //                 }
    //                 return await this.generateLoginTokens({
    //                     tokenDetails: {
    //                         id: user._id,
    //                         sub: user.password,
    //                     },
    //                     user: user
    //                 });
    //             } else {
    //                 throw new BadRequestException(
    //                     'Password is incorrect'
    //                 );
    //             }
    //         }
    //     }
    //     throw new BadRequestException('User not found');
    // }


    async loginUsingCredentials(loginInput: any) {
        let user = {} as any
        if (loginInput.otp && loginInput.otpToken) {
            const verifyOtp = await this.otpService.verifyOtp({ token: loginInput.otpToken, otp: loginInput.otp })
            if (verifyOtp) {
                const user = verifyOtp.user
                console.log({user});
                const verifyUser = await this.userService.verfiedUpdateOrCreate(user.contact)
                return await this.generateLoginTokens({
                    user,
                    tokenDetails: {
                        id: user._id,
                        sub: user.contact
                    }
                });
            } else {
                throw new BadRequestException("Invalid Otp")
            }
        }
        if (loginInput.rtoken) {
            const findTokenFromRedis = await this.redisService.get(this.tokenKeyForRedis + loginInput.rtoken)
            if (!findTokenFromRedis) {
                throw new Error("Invalid Token")
            }
            const tokenInfo = await this.jwtService.verifyAsync(loginInput.rtoken)
            if (tokenInfo && tokenInfo.id) {
                user = await this.userService.findOneByQueryForLogin({ _id: tokenInfo.id })
            }
        } else {
            user = await this.userService.findOneByQueryForLogin({
                contact: loginInput.contact,
                isActive: { $ne: false }
            });
        }


        if (user) {
            if (loginInput.rtoken) {
                return await this.generateLoginTokens({
                    tokenDetails: {
                        id: user._id,
                        sub: user.contact,
                    },
                    user: user
                });
            }
        }

        if (loginInput.contact) {
            const contact = loginInput.contact
            const sendOtpMessage = await this.otpService.otpLogin({ contact, user: { ...user, contact } })
            return sendOtpMessage
        }
        throw new BadRequestException('Method Not allowed');
    }

    async verifyTokenReturnuser(token: string): Promise<any> {
        let tokenDetails
        try {
            tokenDetails = await this.jwtService.verify(token)

        } catch (e) {
            throw new UnauthorizedException(e)
        }

        const finduser = await this.userService.findOneByQueryForLogin({ _id: tokenDetails.id })
        if (finduser?.isActive) {
            return finduser
        }
        throw new UnauthorizedException("user inactive")

    }



    async sysadminLogin(loginData: LoginInput): Promise<any> {
        try {
            let that = this
            async function generateLoginTokens(username: string, password: string) {
                const accessToken = that.jwtService.sign({
                    username,
                    password,
                    isSysadmin: true
                });
                const refreshToken = that.jwtService.sign({ username, password });
                return {
                    token: accessToken,
                    refreshToken,
                    isSysadmin: true
                }
            }
            if (loginData.rtoken) {
                const tokenInfo = await this.jwtService.verifyAsync(loginData.rtoken)
                if (tokenInfo && tokenInfo.username && tokenInfo.password) {
                    loginData.username = tokenInfo.username
                    loginData.password = tokenInfo.password
                } else {
                    throw new BadRequestException("Invalid Token")
                }
            }
            const loginCheck = this.sysadminLoginProcess(loginData.username, loginData.password)
            if (loginCheck) {
                return await generateLoginTokens(loginData.username, loginData.password)
            } else {
                throw new NotFoundException("user not found")
            }
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

    sysadminLoginProcess(username: string, password: string) {
        const sysadminUserName = process.env.USERNAME || '-'
        const sysadminPassword = process.env.PASSWORD || '-'
        if (username === sysadminUserName && password === sysadminPassword) {
            return true
        } else {
            throw new NotFoundException("user not found")
        }
    }

    async verifyTokenSysadmin(token: string): Promise<any> {
        let tokenDetails
        let username
        let password
        try {
            tokenDetails = await this.jwtService.verify(token)
            if (tokenDetails && tokenDetails.username && tokenDetails.password && tokenDetails.isSysadmin === true) {
                username = tokenDetails.username
                password = tokenDetails.password
            } else {
                throw new BadRequestException("Invalid Token")
            }

        } catch (e) {
            throw new UnauthorizedException(e)
        }
        const loginCheck = this.sysadminLoginProcess(username, password)
        if (loginCheck) {
            return { isSysadmin: true }
        }
        throw new UnauthorizedException("user Not Found")

    }

    async forgotPassword(data: any): Promise<any> {
        if (data.otp && data.otpToken && data.newPassword) {
            const verifyOtp = await this.otpService.verifyOtp({ token: data.otpToken, otp: data.otp })
            if (verifyOtp) {
                const user = verifyOtp.user
                const password = await HashService.generateHash(data.newPassword)
                const hash = HashService.base64Encode(password)
                if (password && hash) {
                    const updateuser = await this.userService.update({
                        id: user._id,
                        password, hash
                    })
                    if (!updateuser) {
                        throw new Error("Password Not Changed. Something Went Wrong")
                    }
                    return {
                        status: 'success',
                        message: "Password Successfully Changed"
                    }
                }
                else {
                    throw new Error("Something Went Wrong")
                }
            } else {
                throw new BadRequestException("Invalid Otp")
            }
        }
        else if (data.contact) {
            const user = await this.userService.findOneByQuery({
                contact: data.contact,
                isActive: true
            })
            if (!user) {
                throw new Error("User not found!")
            }

            const sendOtpMessage = await this.otpService.otpLogin({ contact: user.contact, user: user })
            return sendOtpMessage
        }
        else {
            throw new Error("Invalid Credentials")
        }

    }


    async passwordChange(data: any): Promise<any> {
        if (data.username && data.password && data.newPassword) {
            const user = await this.userService.findOneByQuery({
                $or: [
                    {
                        username: data.username,
                    },
                    {
                        contact: data.username,
                    }
                ],
                isActive: { $ne: false }
            })
            if (!user) {
                throw new Error("User not found!")
            }
            const isvalidated = await HashService.validateHash(
                data.password,
                user.password,
            );
            if (!isvalidated) {
                throw new Error("Old Password is Incorrect")
            }
            const password = await HashService.generateHash(data.newPassword)
            const hash = HashService.base64Encode(password)
            const updatePassword = await this.userService.update({
                id: user._id,
                password, hash
            })
            if (!updatePassword) {
                throw new Error("Password not changed! Something Went Wrong")
            }
            return {
                status: 'success',
                message: "Password Successfully Changed"
            }
        } else {
            throw new Error("Invalid Credentials")
        }
    }

}
