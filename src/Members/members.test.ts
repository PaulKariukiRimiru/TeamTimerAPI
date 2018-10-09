import mockingooose from 'mockingoose';

import { Member } from './';

describe('The Members Model', () => {
  let memberModel: Member;

  beforeEach(() => {
    memberModel = new Member();
  });

  it('should save a new member', () => {
    const member = {
      name: 'test user'
    };
    mockingooose.Member.toReturn(member, 'save');
    const mockCallback = jest.fn();

    memberModel.addMember({ name: 'test user' }, mockCallback);
    expect(mockCallback).toBeCalled();
  });
})

