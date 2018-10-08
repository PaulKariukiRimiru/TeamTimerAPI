import * as mongoose from 'mongoose';

import { TeamSchema } from './model';

import { TeamInterface, TeamResponse } from './interface';

const team = mongoose.model('Team', TeamSchema);
export class Team {
  
  public addTeam = (teamData: TeamInterface, callBack: (teamResponse: TeamResponse) => void) => {
    const newTeam = new team(teamData);
    newTeam.save((error, savedTeam) => {
      callBack({
        error: error && error.message,
        savedTeam,
      });
    });
  }
}
