import * as mongoose from 'mongoose';

export const HumanSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,

});
