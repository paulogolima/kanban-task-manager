'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cartao_etiqueta', [
      // Tarefas do Projeto API com suas etiquetas
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440001',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440002',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440003',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440004',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440003',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440005',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Tarefas de UI/UX
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440008',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440005',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440008',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440006',
        created_at: new Date(),
        updated_at: new Date()
      },
      // Tarefas de Mobile
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440009',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440007',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440010',
        etiqueta_id: '880e8400-e29b-41d4-a716-446655440008',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cartao_etiqueta', null, {});
  }
};
