import { Body, Controller, Headers, Post, UnauthorizedException } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginInput } from './dto/login-request.dto';

@Controller('auth')
@ApiTags("auth")
export class AuthController {
    constructor(private authService: AuthService,
    ) { }

    @Post("login")
    async login(@Body() loginInput: LoginInput) {
        const resp: any = await this.authService.login(loginInput)
        return resp
    }

    @Post("logout")
    async logout(@Headers() header: any) {
        let authToken = header.authorization
        const resp: any = await this.authService.logout(authToken)
        return resp
    }

    @Post("forgot-password")
    async forgotPassword(@Body() data: any) {
        return await this.authService.forgotPassword(data)
    }

    @Post("forgot-change")
    async passwordChange(@Body() data: any) {
        return await this.authService.passwordChange(data)
    }


    @Post("sysadmin/login")
    async sysadminLogin(@Body() loginInput: LoginInput) {
        if (((!loginInput.username || !loginInput.password) && !loginInput.rtoken)) {
            throw new UnauthorizedException("Username and Password manadatory")
        }
        return await this.authService.sysadminLogin(loginInput)
    }
}
