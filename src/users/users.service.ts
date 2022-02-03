import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {ObjectID} from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>
) { }

  createUser(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOne(_id: ObjectID) {
    await this.usersRepository.findOne(_id);
  }

  async update(_id: ObjectID, updateUserDto: UpdateUserDto) {
    await this.usersRepository.update(_id, updateUserDto);
  }

  async remove(_id: ObjectID) {
    await this.usersRepository.delete(_id);
  }

}
