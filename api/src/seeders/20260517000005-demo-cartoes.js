'use strict';

export default {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cartaos', [
      // A Fazer - Projeto API
      {
        id: '990e8400-e29b-41d4-a716-446655440001',
        coluna_id: '770e8400-e29b-41d4-a716-446655440001',
        titulo: 'Implementar autenticação JWT',
        descricao: 'Criar middleware de autenticação com tokens JWT',
        prioridade: 'alta',
        prazo: new Date('2026-05-25'),
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '990e8400-e29b-41d4-a716-446655440002',
        coluna_id: '770e8400-e29b-41d4-a716-446655440001',
        titulo: 'Criar modelos Sequelize',
        descricao: 'Definir todos os modelos ORM do banco',
        prioridade: 'alta',
        prazo: new Date('2026-05-22'),
        posicao: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '990e8400-e29b-41d4-a716-446655440003',
        coluna_id: '770e8400-e29b-41d4-a716-446655440001',
        titulo: 'Configurar CORS',
        descricao: 'Restringir origens permitidas',
        prioridade: 'média',
        prazo: new Date('2026-05-23'),
        posicao: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Em Progresso - Projeto API
      {
        id: '990e8400-e29b-41d4-a716-446655440004',
        coluna_id: '770e8400-e29b-41d4-a716-446655440002',
        titulo: 'Adicionar validações de entrada',
        descricao: 'Validar emails, senhas e campos obrigatórios',
        prioridade: 'média',
        prazo: new Date('2026-05-20'),
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '990e8400-e29b-41d4-a716-446655440005',
        coluna_id: '770e8400-e29b-41d4-a716-446655440002',
        titulo: 'Implementar tratamento de erros',
        descricao: 'Error handler global da aplicação',
        prioridade: 'média',
        prazo: new Date('2026-05-21'),
        posicao: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Concluído - Projeto API
      {
        id: '990e8400-e29b-41d4-a716-446655440006',
        coluna_id: '770e8400-e29b-41d4-a716-446655440003',
        titulo: 'Criar conexão PostgreSQL',
        descricao: 'Configurar banco de dados com Docker',
        prioridade: 'alta',
        prazo: new Date('2026-05-17'),
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '990e8400-e29b-41d4-a716-446655440007',
        coluna_id: '770e8400-e29b-41d4-a716-446655440003',
        titulo: 'Estrutura base com Express',
        descricao: 'Boilerplate com rotas e middleware',
        prioridade: 'alta',
        prazo: new Date('2026-05-17'),
        posicao: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      // A Fazer - UI/UX
      {
        id: '990e8400-e29b-41d4-a716-446655440008',
        coluna_id: '770e8400-e29b-41d4-a716-446655440004',
        titulo: 'Wireframes dashboard',
        descricao: 'Criar wireframes do dashboard principal',
        prioridade: 'alta',
        prazo: new Date('2026-05-30'),
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      // Backlog - Mobile App
      {
        id: '990e8400-e29b-41d4-a716-446655440009',
        coluna_id: '770e8400-e29b-41d4-a716-446655440007',
        titulo: 'Definir especificações do app',
        descricao: 'Documento com requisitos e features',
        prioridade: 'baixa',
        prazo: null,
        posicao: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '990e8400-e29b-41d4-a716-446655440010',
        coluna_id: '770e8400-e29b-41d4-a716-446655440007',
        titulo: 'Pesquisar frameworks',
        descricao: 'Comparar React Native, Flutter e Kotlin',
        prioridade: 'baixa',
        prazo: null,
        posicao: 2,
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cartaos', null, {});
  }
};
