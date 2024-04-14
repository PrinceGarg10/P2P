import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    name?: string;

    @ApiProperty()
    desc?: string;

    @ApiProperty()
    isVerified?: Date;

    @ApiProperty()
    isActive?: boolean;

    @ApiProperty()
    isLoginOtp?: boolean;

    @ApiProperty()
    contact?: string;

    @ApiProperty()
    role?: string;

    @ApiProperty()
    email?: string;

    @ApiProperty()
    gender?: string;

    @ApiProperty()
    avatar?: string;

    @ApiProperty()
    state?: string;

    @ApiProperty()
    district?: string;

    @ApiProperty()
    address?: string;

    @ApiProperty()
    password?: string;

    // @ApiProperty()
    hash?: string;

    @ApiProperty()
    username?: string;

    @ApiProperty()
    gId?: string;
}

export class FilterUserDto {
    @ApiProperty()
    gId: string;
}