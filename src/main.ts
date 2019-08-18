// .env
import dotenv from 'dotenv';
dotenv.config();
import { env } from './helpers/verify-env';

// Koa
import Koa from 'koa';

// Middleware
import cors from '@koa/cors';
import bodyParser from 'koa-bodyparser';
import Router from 'koa-router';

import { errorHandling } from './middleware/error-handling';

// Routers
import { authRouter } from './routes/auth';

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'Alive';
});

authRouter(router);

app
  .use(errorHandling())
  .use(cors())
  .use(bodyParser())
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(env.PORT);
console.log(`Server running on http://localhost:${env.PORT}/`);
