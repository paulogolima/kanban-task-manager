'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Quadros', [
      {
        nome: 'Projeto API Tarefas',
        descricao: 'Desenvolvimento da API de gerenciamento de tarefas Kanban',
        idUsuario: 1,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        nome: 'Design do Sistema',
        descricao: 'Tarefas de design e interface do projeto',
        idUsuario: 2,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        nome: 'DevOps e Deploy',
        descricao: 'Tarefas de configuração, DevOps e deployment',
        idUsuario: 3,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Quadros', null, {});
  }
};
