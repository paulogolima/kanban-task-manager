'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Quadros', [
      {
        id: '660e8400-e29b-41d4-a716-446655440001',
        user_id: '550e8400-e29b-41d4-a716-446655440001',
        titulo: 'Projeto API Kanban',
        descricao: 'Sistema de gerenciamento de tarefas com autenticação JWT e PostgreSQL',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '660e8400-e29b-41d4-a716-446655440002',
        user_id: '550e8400-e29b-41d4-a716-446655440002',
        titulo: 'Redesign UI/UX',
        descricao: 'Atualizar interface do sistema',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '660e8400-e29b-41d4-a716-446655440003',
        user_id: '550e8400-e29b-41d4-a716-446655440003',
        titulo: 'Mobile App Development',
        descricao: 'Desenvolver aplicativo mobile nativo',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Quadros', null, {});
  }
};
