import { DataTypes } from 'sequelize'
import { sequelize } from '../db'
// 定义数据模型
const User = sequelize.define("User", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: DataTypes.STRING(30), // 账号
  password: { // 密码
    type: DataTypes.STRING,
  },
  valid: { // 是否合法
    type: DataTypes.TINYINT,
    allowNull: true
  }
});
export default User