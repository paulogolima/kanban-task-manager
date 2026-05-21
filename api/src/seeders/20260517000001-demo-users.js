'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [
      {
        id: '550e8400-e29b-41d4-a716-446655440001',
        nome: 'João Developer',
        email: 'joao@kanban.com',
        senha: '$2b$12$hashedpassword123456789000000000000000', // bcrypt hash
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440002',
        nome: 'Maria Project Manager',
        email: 'maria@kanban.com',
        senha: '$2b$12$hashedpassword123456789000000000000000',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '550e8400-e29b-41d4-a716-446655440003',
        nome: 'Pedro Designer',
        email: 'pedro@kanban.com',
        senha: '$2b$12$hashedpassword123456789000000000000000',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
