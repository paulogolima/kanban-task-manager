'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Usuarios', [
      {
        nome: 'João Silva',
        email: 'joao@example.com',
        senha: 'senha123',
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        nome: 'Maria Santos',
        email: 'maria@example.com',
        senha: 'senha123',
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        nome: 'Pedro Costa',
        email: 'pedro@example.com',
        senha: 'senha123',
        criadoEm: new Date(),
        atualizadoEm: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
