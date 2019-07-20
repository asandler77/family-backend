import { Connection } from 'mongoose';
import { HumanSchema } from './schema/human.schema';

export const personsProviders = [
  {
    provide: 'PERSON_MODEL',
    useFactory: (connection: Connection) => connection.model('Person', HumanSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
