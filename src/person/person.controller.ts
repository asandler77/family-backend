import { Body, Controller, Delete, Get, Post, Query } from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { Person } from './interfaces/person.interface';

@Controller()
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  async create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  async findAll(): Promise<Person[]> {
    return this.personService.findAll();
  }
//     const response = await this.httpService
// .get(TEST_EXECUTION_URL)
// .toPromise();
//     return response.data;
  @Delete()
  async  deleteById(@Query() id): Promise<Person> {
    return this.personService.deleteById(id);
  }
}
