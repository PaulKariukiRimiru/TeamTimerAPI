import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const MemberSchema = new Schema({
  name: {
    type: String,
    required: 'Please provide the member name',
  },
});
