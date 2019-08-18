import Router from 'koa-router';
import { User } from '../types/user';

import { createUser } from '../helpers/user';

export function authRouter(router: Router) {
  router
    .post('/auth', async ctx => {
      const body = ctx.request.body as User;
      ctx.assert(body.username && body.password, 400);
    })
    .post('/register', async ctx => {
      const body = ctx.request.body as User;
      ctx.assert(body.username && body.password, 400);

      const userCreated = await createUser(body.username!, body.password!);
      ctx.assert(userCreated, userCreated.statusCode, userCreated.message);

      ctx.body = userCreated.message;
    })
    .post('/verify', async ctx => {});
}
