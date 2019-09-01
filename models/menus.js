'use strict';
module.exports = (sequelize, DataTypes) => {
  const menus = sequelize.define('menus', {
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    category_id: DataTypes.INTEGER
  }, {});
  menus.associate = function(models) {
    // associations can be defined here
    menus.belongsTo(models.categories,{
      as : 'menus',
      foreignKey: "category_id"
    })
  };
  return menus;
};