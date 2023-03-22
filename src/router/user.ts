import {Context} from 'koa'
import Router from 'koa-router'

const router = new Router()
router.prefix('/usermodule')

router.get('/findUserInfo/:username', async(ctx: Context) => {
  const {username} = ctx.params
  ctx.body = `欢迎${username}`
})

router.post('/adduser', async(ctx) => {
  const user = ctx.request.body
  ctx.body = `欢迎${user.username}`
})

export default router