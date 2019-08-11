import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { DatabaseModule } from '../database/database.module';
import { personsProviders } from './person.providers';
import {PersonDbService} from './person.db.service';

@Module({
 imports: [DatabaseModule],
 controllers: [PersonController],
  providers: [PersonService, PersonDbService, ...personsProviders],
})
export class PersonModule {}
