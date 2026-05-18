'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Atividades', [
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440001',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        cartao_id: '990e8400-e29b-41d4-a716-446655440001',
        acao: 'criou',
        detalhes: JSON.stringify({ descricao: 'Tarefa criada' }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440002',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        cartao_id: '990e8400-e29b-41d4-a716-446655440001',
        acao: 'comentou',
        detalhes: JSON.stringify({ conteudo: 'Começando a implementação desta tarefa!' }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440003',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        cartao_id: '990e8400-e29b-41d4-a716-446655440004',
        acao: 'atualizou',
        detalhes: JSON.stringify({ prioridade: 'média' }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440004',
        usuario_id: '550e8400-e29b-41d4-a716-446655440003',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        cartao_id: '990e8400-e29b-41d4-a716-446655440008',
        acao: 'criou',
        detalhes: JSON.stringify({ descricao: 'Wireframes dashboard' }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440005',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        cartao_id: '990e8400-e29b-41d4-a716-446655440008',
        acao: 'comentou',
        detalhes: JSON.stringify({ conteudo: 'Primeiros wireframes aprovados pelo cliente!' }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440006',
        usuario_id: '550e8400-e29b-41d4-a716-446655440003',
        quadro_id: '660e8400-e29b-41d4-a716-446655440003',
        cartao_id: '990e8400-e29b-41d4-a716-446655440009',
        acao: 'criou',
        detalhes: JSON.stringify({ descricao: 'Definir especificações do app' }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440007',
        usuario_id: '550e8400-e29b-41d4-a716-446655440001',
        quadro_id: '660e8400-e29b-41d4-a716-446655440001',
        cartao_id: null,
        acao: 'acessou',
        detalhes: JSON.stringify({ timestamp: new Date().toISOString() }),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 'bb0e8400-e29b-41d4-a716-446655440008',
        usuario_id: '550e8400-e29b-41d4-a716-446655440002',
        quadro_id: '660e8400-e29b-41d4-a716-446655440002',
        cartao_id: null,
        acao: 'acessou',
        detalhes: JSON.stringify({ timestamp: new Date().toISOString() }),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Atividades', null, {});
  }
};
