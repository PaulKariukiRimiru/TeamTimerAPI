import { Request, Response } from 'express';
import { Member } from '../Members';
import { MemberResponse } from '../Members/interface';
import { Team } from '../Teams';
import { TeamResponse } from '../Teams/interface';

const member = new Member();
const team = new Team();

export class Routes {
  public routes(app): void {
    app.route('/')
      .get((_request: Request, response: Response) => {
        response.status(200).send({
          'message': 'hey there,'
        })
      });

    app.route('/member')
      .post((req: Request, resp: Response) => {
        member.addMember(req.body, (memberResponse: MemberResponse) => {
          resp.send({
            message: memberResponse.error ? memberResponse.error : 'saved member',
            data: memberResponse.savedMember
          });
        });
      });

    app.route('/team')
      .post((req: Request, resp: Response) => {
        team.addTeam(req.body, (teamResp: TeamResponse) => {
          resp.send({
            message: teamResp.error ? teamResp.error : 'saved team',
            data: teamResp.savedTeam,
          })
        })
      })
  }
}