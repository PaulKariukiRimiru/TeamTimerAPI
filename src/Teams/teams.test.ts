import mockingoose from 'mockingoose';

import { Team } from './';

describe('The team model', () => {
  let teamModel: Team;

  beforeEach(() => {
    teamModel = new Team();
  });

  it('should add a new team', () => {
    const team  = {
      name: 'test team',
      coordinator: 'test user',
    }

    mockingoose.Team.toReturn(team, 'save');
    const mockCallBack = jest.fn();

    teamModel.addTeam(team, mockCallBack);
    expect(mockCallBack).toBeCalled();
  });
});
