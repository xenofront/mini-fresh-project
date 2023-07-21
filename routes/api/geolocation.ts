import { HandlerContext, Handlers } from '$fresh/server.ts';
import H from '../../shared/H.ts';

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    let result;
    try {
      const request = await fetch('https://geolocation-db.com/json');
      result = await request.json();
    } catch (err) {
      H.log(err, 'ERROR');
    }

    return Response.json(result);
  }
};
