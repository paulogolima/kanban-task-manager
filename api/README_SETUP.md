# 🚀 SETUP RÁPIDO - Backend PostgreSQL

## ⚠️ PRÉ-REQUISITOS

Você precisa ter instalado:
- **PostgreSQL** (com psql disponível no PATH)
- **Node.js** (já tem)

---

## 🎯 OPÇÃO 1: Setup Automático (Recomendado)

### Passo 1: Executar script PowerShell

```powershell
# Abra PowerShell como Administrador e execute:
cd "c:\Users\keven\OneDrive\Desktop\front kamban\kanban-backend"

# Se for a primeira vez, talvez precise permitir scripts:
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Execute o setup
.\SETUP.ps1
```

O script vai:
1. ✅ Verificar PostgreSQL
2. ✅ Criar banco de dados `kanban_db`
3. ✅ Rodar migrations (criar tabelas)
4. ✅ Rodar seeds (popular com dados de teste)
5. ✅ Iniciar o servidor (opcional)

**Esperado após sucesso:**
```
✅ Conexão com o banco de dados estabelecida com sucesso!
🚀 Servidor rodando na porta 3000
```

---

## 🎯 OPÇÃO 2: Setup Manual (Se script falhar)

### Passo 1: Criar banco de dados

```bash
# Abra terminal com PostgreSQL
psql -U postgres

# Dentro do PostgreSQL, execute:
CREATE DATABASE kanban_db;
\q
```

### Passo 2: Rodar migrations

```bash
cd "c:\Users\keven\OneDrive\Desktop\front kamban\kanban-backend"
npx sequelize-cli db:migrate
```

### Passo 3: Rodar seeds (dados de teste)

```bash
npx sequelize-cli db:seed:all
```

### Passo 4: Iniciar servidor

```bash
node src/server.js
```

**Esperado:**
```
✅ Conexão com o banco de dados estabelecida com sucesso!
🚀 Servidor rodando na porta 3000
```

---

## 🔧 OPÇÃO 3: Se PostgreSQL não está rodando

Se receber erro `ECONNREFUSED`, PostgreSQL não está rodando.

### Windows:
```powershell
# Abra Services (services.msc) e inicie "PostgreSQL"
# Ou em PowerShell (como admin):
Start-Service postgresql-x64-15
```

### macOS/Linux:
```bash
brew services start postgresql
# ou
sudo systemctl start postgresql
```

---

## ✅ VERIFICAR SE ESTÁ FUNCIONANDO

Quando o servidor estiver rodando em outra aba:

```bash
# Terminal novo
cd "c:\Users\keven\OneDrive\Desktop\front kamban\kanban-backend"

# Teste 1: API está rodando?
curl http://localhost:3000/
# Esperado: {"mensagem":"API de Tarefas está rodando!"}

# Teste 2: Boards existem?
curl http://localhost:3000/api/boards
# Esperado: [{"id":1,"nome":"Projeto API",...}]

# Teste 3: Login funciona?
curl -X POST http://localhost:3000/api/users/login ^
  -H "Content-Type: application/json" ^
  -d "{\"email\":\"joao@example.com\",\"senha\":\"senha123\"}"
# Esperado: {"id":1,"nome":"João Silva",...}
```

---

## 🆘 TROUBLESHOOTING

| Erro | Causa | Solução |
|------|-------|---------|
| `ECONNREFUSED` | PostgreSQL não está rodando | Inicie PostgreSQL (Services ou brew start) |
| `database "kanban_db" does not exist` | Banco não foi criado | Execute `CREATE DATABASE kanban_db;` em psql |
| `permission denied` | Permissões de script | Execute em PowerShell admin: `Set-ExecutionPolicy RemoteSigned` |
| `psql: command not found` | PostgreSQL não está no PATH | Reinstale PostgreSQL e adicione ao PATH |

---

## 📊 Arquivo de Configuração

**`.env` (já criado em:**`kanban-backend/.env`**)**
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=kanban_db
DB_USER=postgres
DB_PASSWORD=postgres
PORT=3000
```

Se mudar, edite o arquivo `.env` na pasta `kanban-backend`.

---

## 🎯 Próximo Passo Depois do Setup

Quando o backend estiver rodando (porta 3000):

```bash
# Terminal novo
cd "c:\Users\keven\OneDrive\Desktop\front kamban"
npm run web
```

Frontend vai conectar automaticamente em `localhost:3000/api`

---

**Boa sorte! 🚀**
