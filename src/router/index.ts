import Koa from 'koa'
import fs from 'fs'

export default (app: Koa) => {
  fs.readdirSync(__dirname).forEach((file) => {
    if (file === 'index.ts') return;
    const route = require(`./${file}`).default;
    if (route.routes) {
      app.use(route.routes()).use(route.allowedMethods())
    }
  })
}