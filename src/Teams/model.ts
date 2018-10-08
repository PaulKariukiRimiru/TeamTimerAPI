import * as mongoose from 'mongoose';

const schema = mongoose.Schema;

export const TeamSchema = new schema({
  name: {
    type: String,
    required: "Please provide a team name"
  },
  coordinator: {
    type: String,
    required: "Please provide the team coordinator"
  }
})