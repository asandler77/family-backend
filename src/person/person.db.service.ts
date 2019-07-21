import {Inject, Injectable} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import {Person} from './interfaces/person.interface';

@Injectable()
export class PersonDbService {
    constructor(@Inject('PERSON_MODEL') private readonly personModel: Model<Person>) {

    }
    async getAll(conditions?: Partial<Person>): Promise<Person[]> {
        return this.personModel
            .find(conditions)
            .lean()
            .exec();
    }

}
