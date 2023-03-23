import Koa from 'koa'
import body from 'koa-body' // koa-body不仅能处理post请求的数据，同时也能够处理文件类型的上传。更强大
import json from 'koa-json' // 格式化json
import config from './config'
import routing from './router'

const app = new Koa()
// const router = new Router()
// router.prefix('/dang')

// router.get('/test', async(ctx: Koa.Context, next: Koa.Next) => {
//   ctx.body = 'test'
// })
console.log('wwwwwww', config)

app.use(json())
app.use(body())
routing(app)
// router.use(userRouter.routes())
// router.use(router.allowedMethods())
// app.use(router.routes())
const port = 3002
app.listen(port, () => {
  console.log('启动成功端口：', port)
})