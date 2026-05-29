# 📊 Kanban Task Manager API

Uma API RESTful de **Quadro Kanban** para gerenciamento de tarefas e projetos. Sistema completo com autenticação JWT, organização de cards em colunas e colaboração em tempo real.

---

## 🎯 Sobre o Projeto

Esta é uma API desenvolvida para gerenciar quadros Kanban com funcionalidades de:
- ✅ Criação e gerenciamento de quadros Kanban
- ✅ Organização de tarefas em colunas (A Fazer, Em Progresso, Feito)
- ✅ Sistema de comentários para colaboração
- ✅ Etiquetas/tags para categorização
- ✅ Registro de atividades (log de eventos)
- ✅ Autenticação com JWT
- ✅ Criptografia de senhas com Bcrypt

---

## 🛠️ Stack Tecnológica

### Backend
- **Node.js** + **Express 5.x** - Framework web
- **Sequelize** - ORM para banco de dados
- **MySQL 8.x** - Banco de dados relacional
- **JWT (jsonwebtoken)** - Autenticação
- **Bcrypt** - Hash de senhas
- **Helmet** - Segurança HTTP
- **CORS** - Controle de acesso cross-origin
- **Dotenv** - Variáveis de ambiente

### Desenvolvimento
- **Nodemon** - Auto-reload em desenvolvimento
- **Sequelize CLI** - Migrations

---

## 📋 Pré-requisitos

- **Node.js** v16+ instalado
- **MySQL 8.x** rodando localmente
- **npm** ou **yarn** como gerenciador de pacotes

---

## ⚙️ Configuração Inicial

### 1️⃣ Clonar o Repositório

```bash
git clone <seu-repositorio>
cd kanban-task-manager
```

### 2️⃣ Instalar Dependências

```bash
cd api
npm install
```

### 3️⃣ Configurar Variáveis de Ambiente

Crie um arquivo `.env` na pasta `api/`:

```env
# Banco de Dados
DB_HOST=localhost
DB_PORT=3306
DB_NAME=kanban_db
DB_USER=root
DB_PASSWORD=sua_senha_mysql

# Servidor
PORT=3000
NODE_ENV=development

# JWT
JWT_SECRET=sua_chave_secreta_bem_forte_aqui

# CORS
CORS_ORIGIN=http://localhost:3000
```

### 4️⃣ Criar Banco de Dados

```bash
mysql -u root -p
```

```sql
CREATE DATABASE kanban_db;
USE kanban_db;
```

### 5️⃣ Executar Migrations

```bash
npm run db:migrate
```

---

## 🚀 Iniciar o Servidor

### Modo de Desenvolvimento (com hot-reload)

```bash
cd api
npm run dev
```

O servidor iniciará em `http://localhost:3000`

### Modo Produção

```bash
cd api
npm start
```

---

## 📡 Testar a API

### Health Check

```bash
curl http://localhost:3000/health
```

Resposta esperada:
```json
{ "status": "ok" }
```

### Registrar Usuário

```bash
curl -X POST http://localhost:3000/api/usuarios/registrar \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Paulo Lima",
    "email": "paulo@email.com",
    "senha": "senha123"
  }'
```

### Login de Usuário

```bash
curl -X POST http://localhost:3000/api/usuarios/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "paulo@email.com",
    "senha": "senha123"
  }'
```

Resposta esperada (login):
```json
{
  "id": 1,
  "nome": "Paulo Lima",
  "email": "paulo@email.com",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 🧪 Teste com Thunder Client

Para testar as rotas de usuários com **Thunder Client**, siga os passos:

### 1️⃣ Registrar Novo Usuário

- **Método:** `POST`
- **URL:** `http://localhost:3000/api/usuarios/registrar`
- **Headers:** 
  ```
  Content-Type: application/json
  ```
- **Body (JSON):**
  ```json
  {
    "nome": "João Silva",
    "email": "joao@email.com",
    "senha": "senha123"
  }
  ```

### 2️⃣ Fazer Login

- **Método:** `POST`
- **URL:** `http://localhost:3000/api/usuarios/login`
- **Headers:**
  ```
  Content-Type: application/json
  ```
- **Body (JSON):**
  ```json
  {
    "email": "joao@email.com",
    "senha": "senha123"
  }
  ```

✅ Copie o `token` retornado para usar nas próximas requisições

---

## 📁 Estrutura do Projeto

```
kanban-task-manager/
├── api/
│   ├── src/
│   │   ├── server.js              # Arquivo principal do servidor
│   │   ├── config/                # Configuração de banco de dados
│   │   ├── controllers/           # Lógica de negócio
│   │   ├── models/                # Modelos Sequelize
│   │   ├── migrations/            # Migrations do banco
│   │   ├── middleware/            # Middlewares (autenticação, etc)
│   │   └── routers/               # Rotas da API
│   ├── package.json
│   └── .env                       # Variáveis de ambiente
└── README.md
```

---

## 🔑 Rotas Principais

### Autenticação
- `POST /api/usuarios/registrar` - Criar novo usuário
- `POST /api/usuarios/login` - Login e obter token JWT

### Quadros
- `POST /api/quadros` - Criar quadro
- `GET /api/quadros` - Listar quadros do usuário
- `GET /api/quadros/:id` - Obter detalhes do quadro

### Colunas
- `POST /api/colunas` - Criar coluna
- `GET /api/colunas?quadro_id=:id` - Listar colunas
- `PUT /api/colunas/:id` - Atualizar coluna

### Cartões
- `POST /api/cartoes` - Criar cartão
- `GET /api/cartoes?coluna_id=:id` - Listar cartões
- `PUT /api/cartoes/:id` - Atualizar cartão
- `DELETE /api/cartoes/:id` - Deletar cartão

### Comentários
- `POST /api/comentarios` - Criar comentário
- `GET /api/comentarios?cartao_id=:id` - Listar comentários
- `DELETE /api/comentarios/:id` - Deletar comentário

### Etiquetas
- `POST /api/etiquetas` - Criar etiqueta
- `GET /api/etiquetas` - Listar etiquetas
- `DELETE /api/etiquetas/:id` - Deletar etiqueta

---

## 🔐 Autenticação

A API usa **JWT (JSON Web Token)** para autenticação.

Para requisições autenticadas, inclua o header:

```
Authorization: Bearer SEU_TOKEN_AQUI
```

O token é obtido ao fazer login do usuário.

---

## 📝 Variáveis de Ambiente Disponíveis

| Variável | Descrição | Padrão |
|----------|-----------|--------|
| `DB_HOST` | Host do MySQL | localhost |
| `DB_PORT` | Porta do MySQL | 3306 |
| `DB_NAME` | Nome do banco de dados | kanban_db |
| `DB_USER` | Usuário do MySQL | root |
| `DB_PASSWORD` | Senha do MySQL | (obrigatório) |
| `PORT` | Porta do servidor | 3000 |
| `NODE_ENV` | Ambiente | development |
| `JWT_SECRET` | Chave secreta JWT | (obrigatório) |
| `CORS_ORIGIN` | Origem CORS permitida | http://localhost:3000 |

---

## 🐛 Troubleshooting

### Erro: "connect ECONNREFUSED 127.0.0.1:3306"
- ✅ Certifique-se de que MySQL está rodando
- ✅ Verifique credenciais no `.env`

### Erro: "ER_BAD_DB_ERROR"
- ✅ Execute: `npm run db:migrate`

### Erro: "ENOENT: no such file or directory, open '.env'"
- ✅ Crie o arquivo `.env` conforme exemplo acima

### Porta 3000 já em uso
- ✅ Mude a variável `PORT` no `.env`

---

## ‍💻 Desenvolvimento

### Executar testes
```bash
npm test
```

### Criar nova migration
```bash
npx sequelize-cli migration:generate --name create-tabela
```

### Visualizar logs
```bash
npm run dev
# Os logs aparecem no console
```

---

## 📄 Licença

ISC

---

## 💡 Dicas

- Sempre copie o token retornado no login antes de fazer requisições autenticadas
- Siga a ordem ao estruturar: Quadro → Coluna → Cartão → Comentário → Etiqueta
- Não esqueça de preencher o header `Authorization` com seu token JWT

---

**Versão:** 1.0.0
