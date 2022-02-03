import {ObjectID} from 'typeorm';
export class CreateUserDto {
    userId: number;
    url: string;
    title: string;
    description: string;
    createdAt: Date;
    updatedAt: Date;
}
