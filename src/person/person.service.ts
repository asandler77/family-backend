import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Person } from './interfaces/person.interface';
import { CreatePersonDto } from './dto/create-person.dto';

@Injectable()
export class PersonService {
  constructor(@Inject('PERSON_MODEL') private readonly personModel: Model<Person>) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const createdPerson = new this.personModel(createPersonDto);
    return await createdPerson.save();
  }

  async findAll(): Promise<Person[]> {
    return await this.personModel.find().exec();
  }

  async deleteById(_id): Promise<Person> {
    return await this.personModel.remove({ _id }).exec();
  }
}
