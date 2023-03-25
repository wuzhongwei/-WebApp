import firstctgy from './firstctgy'
import secondctgy from './secondctgy'
import thirdctgy from './thirdctgy'

firstctgy.hasOne(secondctgy, { // 设置外键
  foreignKey: 'firstCtgyId',
  onDelete: 'RESTRICT',
  onUpdate: 'RESTRICT',
  constraints: false
})
// secondctgy.belongsTo(firstctgy);
// 一到多
secondctgy.hasMany(thirdctgy, { 
  as: 'thirdctgy', // 三级分类表名
  foreignKey: 'secctgyid' // 三级外键
})
// 多到一
thirdctgy.belongsTo(secondctgy, { 
  foreignKey: 'secctgyid', // 三级外键
  targetKey: 'secondctgyid' // 关联二级分类主键
}) 

export default async function findSecondctgyThirdctgy(firstctgyId: number) {
  return await secondctgy.findAll({
    // raw: true,
    where: {
      firstctgyId
    },
    include: [
      {
        model: thirdctgy,
        as: 'thirdctgy' // 跟上面别名一致
      }
    ]
  })
}
