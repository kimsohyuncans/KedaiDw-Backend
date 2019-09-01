'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      menu_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model : 'menus',
          key : 'id'
        },
      },
      transaction_id: {
        type: Sequelize.INTEGER,
        allowNull:false,
        references : {
          model : 'transactions',
          key : 'id'
        },
        
      },
      qyt: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.DOUBLE
      },
      status: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('orders');
  }
};