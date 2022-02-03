import {ObjectID} from 'typeorm';
export class CreateUserDto {
    _id: ObjectID;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}
