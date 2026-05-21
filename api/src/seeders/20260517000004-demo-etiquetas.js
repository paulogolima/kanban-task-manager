'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Etiqueta', [
      // Projeto API Kanban
      {
        id: '880e8400-e29b-41d4-a716-446655440001',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        nome: 'Bug',
        cor: '#ff4444',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '880e8400-e29b-41d4-a716-446655440002',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        nome: 'Feature',
        cor: '#4444ff',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '880e8400-e29b-41d4-a716-446655440003',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        nome: 'Urgente',
        cor: '#ffbb44',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '880e8400-e29b-41d4-a716-446655440004',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        nome: 'Baixa Prioridade',
        cor: '#44ff44',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Redesign UI/UX
      {
        id: '880e8400-e29b-41d4-a716-446655440005',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        nome: 'Design',
        cor: '#ff44ff',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '880e8400-e29b-41d4-a716-446655440006',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        nome: 'Frontend',
        cor: '#44ffff',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Mobile App
      {
        id: '880e8400-e29b-41d4-a716-446655440007',
        quadro_id: '660e8400-e29b-41d4-a716-446655440003',
        nome: 'iOS',
        cor: '#000000',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '880e8400-e29b-41d4-a716-446655440008',
        quadro_id: '660e8400-e29b-41d4-a716-446655440003',
        nome: 'Android',
        cor: '#33cc33',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Etiqueta', null, {});
  }
};
