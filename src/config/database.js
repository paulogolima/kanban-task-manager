import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

// Conexão com o banco de dados PostgreSQL
const conexao = new Sequelize(
  process.env.DB_NAME || 'kanban_db',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: false, // altere para console.log para ver as queries SQL
    define: {
      timestamps: true,
      createdAt: 'criadoEm',      // Avisa que a coluna em pt-br
      updatedAt: 'atualizadoEm', // Avisa que a coluna em pt-br 
    },
  }
);

export default conexao;