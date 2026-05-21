#!/usr/bin/env node

/**
 * Script de inicialização do FocusBoard Backend
 * Executa: Verificar DB → Migrations → Seeds → Server
 */

import 'dotenv/config';
import { exec } from 'child_process';
import { promisify } from 'util';
import conexao from './src/config/database.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const execAsync = promisify(exec);

console.log(`
╔════════════════════════════════════════════════════════════════╗
║        🚀 INICIALIZANDO FOCUSBOARD BACKEND                    ║
║              (FocusBoard Task Manager)                        ║
╚════════════════════════════════════════════════════════════════╝
`);

// ==========================================
// PASSO 1: Verificar conexão com banco
// ==========================================
console.log('\n[1/4] Testando conexão com PostgreSQL...');

try {
  await conexao.authenticate();
  console.log('✅ Conexão com banco de dados estabelecida!');
} catch (error) {
  console.error('❌ ERRO: Não conseguiu conectar ao PostgreSQL');
  console.error('   Detalhes:', error.message);
  console.log(`
  
⚠️  SOLUÇÃO:

  1. Instale PostgreSQL em: https://www.postgresql.org/download/
  
  2. Após instalar, criar banco de dados:
     - Abra "pgAdmin" (PostgreSQL GUI)
     - Ou execute no PowerShell:
       psql -U postgres -c "CREATE DATABASE kanban_db;"
  
  3. Configure o arquivo .env com:
     DB_HOST=localhost
     DB_PORT=5432
     DB_NAME=kanban_db
     DB_USER=postgres
     DB_PASSWORD=postgres
  
  4. Execute este script novamente.

  ⏱️  Tempo estimado: 10 minutos para instalar PostgreSQL
  `);
  process.exit(1);
}

// ==========================================
// PASSO 2: Sincronizar models (criar tabelas)
// ==========================================
console.log('\n[2/4] Sincronizando models com banco de dados...');

try {
  // Importar modelos
  const models = [];
  await conexao.sync({ alter: true });
  console.log('✅ Models sincronizados com sucesso!');
} catch (error) {
  console.error('❌ Erro ao sincronizar models:', error.message);
  console.log('\n⚠️  Continuando mesmo assim...\n');
}

// ==========================================
// PASSO 3: Popular banco com dados (Seeds)
// ==========================================
console.log('\n[3/4] Populando banco de dados com dados de teste...');

try {
  // Tentar rodar seeds com npx
  const { stdout, stderr } = await execAsync(
    `npx.cmd sequelize-cli db:seed:all`,
    { cwd: __dirname, timeout: 30000 }
  );
  
  if (stderr && !stderr.includes('Successfully executed')) {
    console.log('⚠️  Seeds já podem estar executadas');
  } else {
    console.log('✅ Dados de teste inseridos!');
  }
} catch (error) {
  console.log('⚠️  Não foi possível rodar seeds automáticas');
  console.log('   (Provavelmente já foram executadas)');
}

// ==========================================
// PASSO 4: Iniciar servidor
// ==========================================
console.log('\n[4/4] Iniciando servidor na porta 3000...\n');

const PORT = process.env.PORT || 3000;

// Importar e iniciar o servidor
import('./src/server.js').then(() => {
  console.log(`
╔════════════════════════════════════════════════════════════════╗
║                   ✅ SISTEMA PRONTO!                          ║
╚════════════════════════════════════════════════════════════════╝

📌 Backend: http://localhost:${PORT}
📌 Frontend: http://localhost:19006

🔗 Próximos passos:

  1. Testar com curl:
     curl http://localhost:${PORT}/api/boards

  2. Fazer login no Frontend:
     Email: joao@example.com
     Senha: senha123

  3. Ver DevTools (F12) → Network
     Verificar requisições para localhost:${PORT}/api

💡 Dica: Deixe este terminal rodando!

  `);
}).catch(error => {
  console.error('❌ Erro ao iniciar servidor:', error);
  process.exit(1);
});
