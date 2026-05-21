'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Colunas', [
      // Projeto API Kanban
      {
        id: '770e8400-e29b-41d4-a716-446655440001',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        titulo: '📋 A Fazer',
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440002',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        titulo: '🚀 Em Progresso',
        posicao: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440003',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        titulo: '✅ Concluído',
        posicao: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Redesign UI/UX
      {
        id: '770e8400-e29b-41d4-a716-446655440004',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        titulo: '📋 A Fazer',
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440005',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        titulo: '🚀 Em Progresso',
        posicao: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440006',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        titulo: '✅ Concluído',
        posicao: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Mobile App
      {
        id: '770e8400-e29b-41d4-a716-446655440007',
        quadro_id: '660e8400-e29b-41d4-a716-446655440003',
        titulo: '📋 Backlog',
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440008',
        quadro_id: '660e8400-e29b-41d4-a716-446655440003',
        titulo: '🏗️ Desenvolvimento',
        posicao: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440009',
        quadro_id: '660e8400-e29b-41d4-a716-446655440003',
        titulo: '🧪 Testes',
        posicao: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '770e8400-e29b-41d4-a716-446655440010',
        quadro_id: '660e8400-e29b-41d4-a716-446655440003',
        titulo: '🚀 Deploy',
        posicao: 4,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Colunas', null, {});
  }
};
