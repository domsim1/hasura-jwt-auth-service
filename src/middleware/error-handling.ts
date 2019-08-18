import Koa from 'koa';

export function errorHandling() {
  return async (ctx: Koa.BaseContext, next: () => Promise<any>) => {
    try {
      await next();
    } catch (err) {
      ctx.status = err.status || 500;
      ctx.body = err.message;
      ctx.app.emit('error', err, ctx);
    }
  };
}
