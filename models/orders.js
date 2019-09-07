'use strict';
module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    menu_id: DataTypes.INTEGER,
    transaction_id: DataTypes.INTEGER,
    qyt: DataTypes.INTEGER,
    price: DataTypes.DOUBLE,
    status: DataTypes.BOOLEAN
  }, {});
  orders.associate = function(models) {
    // associations can be defined here
    orders.hasOne(models.transactions,{
      as : 'transactionID',
      foreignKey: "transaction_id"
    })

    orders.belongsTo(models.menus,{
      as : 'menus_info',
      foreignKey : 'menu_id'
    })
  };
  return orders;
};