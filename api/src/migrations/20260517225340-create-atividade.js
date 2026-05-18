'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Atividades', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      usuario_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      quadro_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Quadros',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      cartao_id: {
        type: Sequelize.UUID,
        references: {
          model: 'Cartaos',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      acao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      detalhes: {
        type: Sequelize.JSON
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
    await queryInterface.dropTable('Atividades');
  }
};