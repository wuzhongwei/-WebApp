import {Sequelize} from 'sequelize'
// 从环境变量中读取数据库配置
const { DB_USERNAME = '', DB_PASSWORD = '', DB_HOST = '', DB_DATA_BASE = '', DB_PORT }: any = process.env;

const sequelize = new Sequelize(DB_DATA_BASE, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  timezone: '+08:00',
  pool: { // 连接池
    max: 20,
    min: 10,
    idle: 10000,
    acquire: 1000
  }
});

// 数据库初始化方法
async function init() {
  await sequelize.sync({ alter: true });
}
export {
  init,
  sequelize
}
