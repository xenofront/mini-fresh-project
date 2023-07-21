import { HandlerContext, Handlers } from '$fresh/server.ts';
import H from '../../shared/H.ts';

export const handler: Handlers = {
  async GET(_req: Request, _ctx: HandlerContext) {
    let location;
    try {
      const request = await fetch('https://geolocation-db.com/json');
      location = await request.json();
      H.log(location.city);
    } catch (err) {
      H.log(err, 'ERROR');
    }

    return new Response();
  }
};
