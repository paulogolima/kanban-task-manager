'use strict';

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tarefas', [
      {
        titulo: 'Configurar banco de dados',
        descricao: 'Configurar conexão com PostgreSQL e criar schema inicial',
        status: 'CONCLUIDO',
        prioridade: 'ALTA',
        dataVencimento: new Date('2026-05-10'),
        idUsuario: 1,
        idQuadro: 1,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        titulo: 'Criar endpoints de tarefas',
        descricao: 'Implementar CRUD de tarefas com Sequelize',
        status: 'EM_PROGRESSO',
        prioridade: 'ALTA',
        dataVencimento: new Date('2026-05-20'),
        idUsuario: 1,
        idQuadro: 1,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        titulo: 'Criar endpoints de quadros',
        descricao: 'Implementar CRUD de quadros Kanban',
        status: 'A_FAZER',
        prioridade: 'MEDIA',
        dataVencimento: new Date('2026-05-25'),
        idUsuario: 1,
        idQuadro: 1,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        titulo: 'Criar endpoints de usuários',
        descricao: 'Implementar autenticação e gerenciamento de usuários',
        status: 'A_FAZER',
        prioridade: 'ALTA',
        dataVencimento: new Date('2026-05-22'),
        idUsuario: 1,
        idQuadro: 1,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        titulo: 'Design do Dashboard',
        descricao: 'Criar protótipos do dashboard em Figma',
        status: 'EM_REVISAO',
        prioridade: 'ALTA',
        dataVencimento: new Date('2026-05-18'),
        idUsuario: 2,
        idQuadro: 2,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        titulo: 'Design dos formulários',
        descricao: 'Criar componentes de formulários reutilizáveis',
        status: 'EM_PROGRESSO',
        prioridade: 'MEDIA',
        dataVencimento: new Date('2026-05-20'),
        idUsuario: 2,
        idQuadro: 2,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        titulo: 'Setup do Docker',
        descricao: 'Configurar containerização da aplicação',
        status: 'A_FAZER',
        prioridade: 'MEDIA',
        dataVencimento: new Date('2026-05-28'),
        idUsuario: 3,
        idQuadro: 3,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      },
      {
        titulo: 'Pipeline CI/CD',
        descricao: 'Configurar GitHub Actions para testes e deploy',
        status: 'A_FAZER',
        prioridade: 'ALTA',
        dataVencimento: new Date('2026-05-30'),
        idUsuario: 3,
        idQuadro: 3,
        criadoEm: new Date(),
        atualizadoEm: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tarefas', null, {});
  }
};
