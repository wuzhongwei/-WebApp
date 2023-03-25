import Koa from 'koa'
import body from 'koa-body' // koa-body不仅能处理post请求的数据，同时也能够处理文件类型的上传。更强大
import json from 'koa-json' // 格式化json
import * as dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })

import routing from './router'
import {init} from  './db';

import firstctgy from './model/firstctgy'
import secondctgy from './model/secondctgy'
import thirdctgy from './model/thirdctgy'
import onetomany from './model/onetomany'
const app = new Koa()

app.use(json())
app.use(body())
// app.use(globalError)
routing(app)

const port = 3002
app.listen(port, () => {
  console.log(firstctgy,secondctgy,thirdctgy)
  init()
  console.log('one', onetomany)
  console.log('启动成功端口：', port)
})