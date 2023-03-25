import { DataTypes } from 'sequelize'
import { sequelize } from '../db'
// 定义数据模型
const Onectgy = sequelize.define("firstctgy", {
  firstCtgyId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(20),
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});
export default Onectgy