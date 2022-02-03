import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ObjectID} from 'typeorm';

@Controller('whishlist')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    return this.usersService.createUser(createUserDto);
  }

  @Get('all')
  findAll() {
    return this.usersService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') userId: number) {
      return this.usersService.findOne(userId);
  }

  @Delete('delete')
  remove(@Body('id') userId: number) {
    return this.usersService.remove(userId);
  }
}
