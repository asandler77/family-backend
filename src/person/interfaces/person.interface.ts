import { Document } from 'mongoose';

export interface Person extends Document {
  readonly firstName: string;
  // readonly sureName: string;
}
