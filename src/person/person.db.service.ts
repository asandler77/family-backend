import {Inject, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import {Person} from './interfaces/person.interface';
import {CreatePersonDto} from './dto/create-person.dto';

@Injectable()
export class PersonDbService {
    constructor(@Inject('PERSON_MODEL') private readonly personModel: Model<Person>) {

    }
    async getAll(): Promise<Person[]> {
        return await this.personModel
            .find()
            .exec();
    }

    async create(createdPerson: CreatePersonDto): Promise<Person> {
        const newPerson = await this.personModel.create(createdPerson);
        return newPerson;
    }

    async deleteById(id): Promise<Person> {
        // const _id = id;
        return await this.personModel.deleteOne({id});
    }

}
