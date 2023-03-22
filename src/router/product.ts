import {Context} from 'koa'
import Router from 'koa-router'

const router = new Router()
router.prefix('/product')

router.get('/:username', async(ctx: Context) => {
  const {username} = ctx.params
  ctx.body = `欢迎来到产品页${username}`
})

export default router