import Router from 'koa-router';
import { User } from '../types/user';

import { createUser, loginUser } from '../helpers/user';

export function authRouter(router: Router) {
  router
    .post('/auth', async (ctx): Promise<void> => {
      const body = ctx.request.body as User;
      if (!body || !body.username || !body.password) {
        ctx.throw(400);
        return;
      }

      const userLogin = await loginUser(body.username, body.password);
      ctx.assert(userLogin.success, userLogin.statusCode, userLogin.message)

      ctx.body = userLogin.message;
    })
    .post('/register', async (ctx): Promise<void> => {
      const body = ctx.request.body as User;
      if (!body || !body.username || !body.password || !body.firstname || !body.lastname ) {
        ctx.throw(400);
        return;
      }
      
      const userCreated = await createUser(body.username, body.password, body.firstname, body.lastname);
      ctx.assert(userCreated.success, userCreated.statusCode, userCreated.message);

      ctx.body = userCreated.message;
    })
    .post('/verify', async (ctx): Promise<void> => {});
}
