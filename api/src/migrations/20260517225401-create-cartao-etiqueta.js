'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cartao_etiqueta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cartao_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Cartaos',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      etiqueta_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Etiqueta',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cartao_etiqueta');
  }
};
