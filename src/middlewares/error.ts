import Koa, {Context} from 'koa'
export const globalError = async(ctx: Context, next: Koa.Next) => {
  try {
    await next()
  } catch (error: any) {
    ctx.body = `服务器错误：${error.message}`
  }
}