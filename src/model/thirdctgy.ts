import { DataTypes } from 'sequelize'
import { sequelize } from '../db'
// 定义数据模型
const Thirdctgy = sequelize.define("thirdctgy", {
  thirdctgyid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  thirdname: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  secctgyid: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
}, {
  timestamps: false,
  freezeTableName: true
});
export default Thirdctgy