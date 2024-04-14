import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDocument, UserEntity } from './schema/user.schema';
import { generateIdCharacters } from '../../utils/GenerateCharacter';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(UserEntity.name)
        private userModel: Model<UserDocument>,
    ) { }

    async getUniqueUsername(user: CreateUserDto): Promise<string> {
        const chars = generateIdCharacters(3);
        let firstname;
        if (!user.name) {
            if (user.contact) {
                firstname = user.contact;
            } else {
                firstname = user.email?.split('@')[0];
            }
        } else {
            firstname = user.name.split(' ')[0];
        }
        const username = firstname + chars;
        return username;
    }

    async create(data: CreateUserDto) {
        try {
            const unique = await this.getUniqueUsername(data)
            data.username = unique
            data.password = data.password || unique + '@pass';
            try {
                console.log({data});
                const createUser = await this.userModel.create(data)
                return createUser
            } catch (e) {
                throw new BadRequestException(e)
            }
        } catch (e) {
            throw new BadRequestException(e)
        }
    }

    async verfiedUpdateOrCreate(contact: string): Promise<any> {
        const finduser = await this.userModel.findOneAndUpdate({
            contact
        }, { isVerified: new Date() }, { new: true, lean: true, runValidators: true })
        if (!finduser) {
            return await this.create({ contact, isVerified: new Date() })
        }
        return finduser
    }

    async findOne(id: string): Promise<any | null> {
        try {
            const user = await this.userModel.findById(id)
            return user
        }
        catch (e) {
            throw new BadRequestException(e)
        }
    }


    async update(data: UpdateUserDto): Promise<any> {
        try {
            const { id, ...update } = data;
            const user = await this.userModel.findByIdAndUpdate(
                id,
                update,
                { new: true },
            );
            if (!user) throw new NotFoundException('No user found!');
            return user;
        }
        catch (e) {
            throw new BadRequestException(e)
        }
    }

    async findOneAndUpdate(data: any): Promise<any> {
        try {
            const { filter, update } = data;
            const user = await this.userModel.findOneAndUpdate(
                filter,
                update,
                { new: true, lean: true },
            );
            if (!user) throw new NotFoundException('No user found!');
            return user;
        }
        catch (e) {
            console.log("Error When User Update------------------", e)
        }
    }

    async findAll(data: any): Promise<any> {
        try {
            const filter: any = {}
            if (data.role) {
                filter['role'] = data.role
            }
            if (data.gId) {
                filter['gId'] = data.gId
            }
            const user = await this.userModel.find(filter).lean(true)
            return user;
        }
        catch (e) {
            throw new BadRequestException(e)
        }
    }


    async findOneByQueryForLogin(query: any): Promise<any> {
        const user: any = await this.userModel.findOne(query).select({
            isActive: 1, name: 1, avatar: 1, contact: 1, role: 1, password: 1, hash: 1, isLoginOtp: 1, gId: 1, userId: 1
        }).lean(true).lean(true)
        return user
    }

    async findOneByQuery(query: any, select = ''): Promise<any> {
        const populate = query.populate || []
        delete query.populate
        return await this.userModel.findOne(query).select(select).lean(true).populate(populate)
    }

    async findByQuery(query: any, select = ''): Promise<any> {
        return await this.userModel.find(query).lean(true).select(select)
    }

    async remove(id: any): Promise<any> {
        try {
            const user = await this.findOne(id)
            if (user) {
                await this.userModel.findByIdAndDelete(id)
                return { status: 'success', message: 'User deleted successfully!' }
            }
            else {
                throw new NotFoundException("User Not Found")
            }
        }
        catch (e) {
            throw new BadRequestException(e)
        }
    }

}
