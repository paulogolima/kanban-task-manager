'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('cartao_usuario', [
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440001',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440002',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440003',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440004',
        usuario_id: '550e8400-e29b-41d4-a716-446655440003',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440005',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440006',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440007',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440008',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440009',
        usuario_id: '550e8400-e29b-41d4-a716-446655440003',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        cartao_id: '990e8400-e29b-41d4-a716-446655440010',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('cartao_usuario', null, {});
  }
};
