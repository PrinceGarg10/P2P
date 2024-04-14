import { Body, Controller, Delete, Get, Patch, Post, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';
import { Authorized } from '../../decorators/authorized.decorator';
import { CreateUserDto, FilterUserDto } from './dto/create-user.dto';

@Controller('user')
@ApiTags("user")
export class UserController {
    constructor(
        private userService: UserService
    ) { }

    // @Authorized()
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return await this.userService.create(createUserDto);
    }

    
    @Authorized()
    @Get('all')
    @ApiQuery({ type: FilterUserDto})
    async findAll(@Query() query: any) {
        return await this.userService.findAll(query);
    }

    @Authorized()
    @Get()
    async findOne(@Query('id') id: string) {
        return await this.userService.findOne(id);
    }

    @Authorized()
    @Patch()
    async update(@Body() updateUserDto: UpdateUserDto) {
        return await this.userService.update(updateUserDto);
    }

    @Authorized()
    @Delete()
    async remove(@Query('id') id: string) {
        return await this.userService.remove(id);
    }

}
