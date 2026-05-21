'use strict';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Tarefas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      prioridade: {
        type: Sequelize.STRING
      },
      dataVencimento: {
        type: Sequelize.DATE
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Usuarios',
          key: 'id'
        }
      },
      idQuadro: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Quadros',
          key: 'id'
        }
      },
      criadoEm: {
        allowNull: false,
        type: Sequelize.DATE
      },
      atualizadoEm: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Tarefas');
  }
};