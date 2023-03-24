import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router({prefix: '/usermodule'})

router.post('/adduser', user.createUser)

export default router