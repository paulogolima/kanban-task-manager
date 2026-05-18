'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Comentarios', [
      {
        id: 'aa0e8400-e29b-41d4-a716-446655440001',
        cartao_id: '990e8400-e29b-41d4-a716-446655440001',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        conteudo: '💬 Começando a implementação desta tarefa!',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'aa0e8400-e29b-41d4-a716-446655440002',
        cartao_id: '990e8400-e29b-41d4-a716-446655440001',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        conteudo: '👍 Excelente! Estou acompanhando o progresso.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'aa0e8400-e29b-41d4-a716-446655440003',
        cartao_id: '990e8400-e29b-41d4-a716-446655440004',
        usuario_id: '550e8400-e29b-41d4-a716-446655440003',
        conteudo: '🔧 Já implementei 50% das validações.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'aa0e8400-e29b-41d4-a716-446655440004',
        cartao_id: '990e8400-e29b-41d4-a716-446655440005',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        conteudo: '✅ O tratamento de erros foi finalizado e testado.',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'aa0e8400-e29b-41d4-a716-446655440005',
        cartao_id: '990e8400-e29b-41d4-a716-446655440008',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        conteudo: '🎨 Primeiros wireframes aprovados pelo cliente!',
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Comentarios', null, {});
  }
};
