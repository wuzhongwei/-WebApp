import Router from 'koa-router'
import user from '../controllers/user'

const router = new Router({prefix: '/usermodule'})

router.post('/adduser', user.createUser)
router.get('/getUser', user.getUser)
router.get('/getfirst', user.getfirst)

export default router