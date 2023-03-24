import {Context} from 'koa'
import User from '../model/user'
class UserCtl {
  async createUser(ctx: Context) {
    const { request } = ctx;
    
    const data = await User.create(request.body);
    ctx.body = data
  }
}

export default new UserCtl()