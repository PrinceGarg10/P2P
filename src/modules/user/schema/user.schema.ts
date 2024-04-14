import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Gender } from "../../common/constants/gender";
import { AbstractMongoEntity } from "../../generic/schema/abstract.mongo.entity";
import { HashService } from "../../../utils/hashService";
import { RoleEnum } from "../../common/constants/role";
import { UtilsService } from "../../../utils/utils.service";


@Schema({ timestamps: true })
export class UserEntity extends AbstractMongoEntity {
    @Prop()
    name: string;

    @Prop()
    desc: string;

    @Prop()
    isVerified: Date;

    @Prop({
        default: true
    })
    isActive: boolean;

    @Prop({
        index: true,
        required: true,
        unique: true
    })
    contact: string;

    @Prop({ enum: RoleEnum, default: RoleEnum.USER })
    role: string;

    @Prop()
    email: string;

    @Prop({ enum: Object.values(Gender) })
    gender: string;

    @Prop()
    avatar: string;

    @Prop()
    state: string;

    @Prop()
    district: string;

    @Prop({ unique: true })
    username: string;

    @Prop()
    address: string;

    @Prop({ default: true })
    isLoginOtp: boolean;

    @Prop(
        {
            select: false
        }
    )
    password: string;

    @Prop(
        {
            select: false
        }
    )
    hash: string;

}

async function preSavedHook(next: any) {
    if (!this.isModified('password')) return next();
    const password = await HashService.generateHash(this.password)
    this.set('password', password);
    this.set("hash", HashService.base64Encode(this.password));
    next();
}

export const UserDatabaseName = 'users';
export const UserSchema = SchemaFactory.createForClass(UserEntity);

UserSchema.pre<UserDocument>('save', preSavedHook);
UserSchema.post('save', UtilsService.mongooseError)


export type UserDocument = UserEntity & Document;