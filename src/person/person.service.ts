import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Person } from './interfaces/person.interface';
import { CreatePersonDto } from './dto/create-person.dto';
import {PersonDbService} from './person.db.service';

@Injectable()
export class PersonService {
  constructor(
      // @Inject('PERSON_MODEL') private readonly personModel: Model<Person>,
              private personDbService: PersonDbService) {}

  async create(createPersonDto: CreatePersonDto): Promise<Person> {
    const createdPerson = {...createPersonDto};
        // new this.personModel(createPersonDto);
    return await this.personDbService.create(createPersonDto);
  }

  async findAll(): Promise<Person[]> {
    return await this.personDbService.getAll();
  }

  async deleteById(id): Promise<Person> {
    return await this.personDbService.deleteById({ id });
  }
}
