'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
    categories.hasMany(models.menus,{
      foreignKey : 'category_id',
      as : 'menus'
    })
  };
  return categories;
};