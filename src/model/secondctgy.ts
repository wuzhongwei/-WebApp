import { DataTypes } from 'sequelize'
import { sequelize } from '../db'
// 定义数据模型
const Secondctgy = sequelize.define("secondctgy", {
  secondctgyid: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  secctgyname: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  firstCtgyId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  timestamps: false,
  freezeTableName: true
});

export default Secondctgy