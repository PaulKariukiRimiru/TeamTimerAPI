import * as mongoose from 'mongoose';

import { MemberSchema } from './model';
import { MemberInterface, MemberResponse } from './interface';

const member = mongoose.model('Member', MemberSchema);
export class Member {

  public addMember = (memberData: MemberInterface, callBack: (resp: MemberResponse) => void) => {
    const savedMember = new member(memberData);
    
    savedMember.save((error, savedMember) => {
      callBack({
        error: error && error.message,
        savedMember: savedMember
      });
    })
  }
}
