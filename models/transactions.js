'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    table_number: DataTypes.INTEGER,
    finished_time: DataTypes.STRING,
    subtotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    service_charge: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
  };
  return transactions;
};