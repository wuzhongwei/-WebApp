import {Context} from 'koa'
import onetomany from '../model/onetomany'
import User from '../model/user'
class UserCtl {
  async createUser(ctx: Context) {
    const { request } = ctx;
    
    const data = await User.create(request.body);
    ctx.body = data
  }
  async getUser(ctx: Context) {
    ctx.body = {
      name: 'ww'
    }
  }
  async getfirst(ctx: Context) {
    const data = await onetomany(1)
    ctx.body = data
  }
}

export default new UserCtl()