# API Kanban - Sistema de Gerenciamento de Tarefas

## 🚀 Como Rodar

### Pré-requisitos
- Node.js 18+
- Docker e Docker Compose

### 1. Instale as dependências
```bash
npm install
```

### 2. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

### 3. Inicie o banco de dados (PostgreSQL no Docker)
```bash
docker-compose up -d
```

### 4. Execute as migrations
```bash
npx sequelize-cli db:migrate
```

### 5. Rode o servidor
```bash
npm run dev
```

Servidor estará rodando em: **http://localhost:3000**

---

## 📚 Endpoints Principais

### Usuários
- `POST /api/usuarios/registrar` - Criar conta
- `POST /api/usuarios/login` - Fazer login (retorna JWT)

### Quadros (com autenticação)
- `GET /api/quadros` - Listar meus quadros
- `POST /api/quadros` - Criar quadro
- `PUT /api/quadros/:id` - Atualizar quadro
- `DELETE /api/quadros/:id` - Deletar quadro

### Colunas
- `GET /api/colunas` - Listar colunas
- `POST /api/colunas` - Criar coluna
- `PUT /api/colunas/:id` - Atualizar coluna
- `DELETE /api/colunas/:id` - Deletar coluna

### Cartões
- `GET /api/cartoes` - Listar cartões
- `POST /api/cartoes` - Criar cartão
- `PUT /api/cartoes/:id` - Atualizar cartão
- `DELETE /api/cartoes/:id` - Deletar cartão

### Comentários (com autenticação)
- `GET /api/comentarios` - Listar comentários
- `POST /api/comentarios` - Criar comentário

### Etiquetas
- `GET /api/etiquetas` - Listar etiquetas
- `POST /api/etiquetas` - Criar etiqueta

---

## 🛑 Para o servidor e banco de dados
```bash
npm stop  # para o servidor
docker-compose down  # para o banco de dados
```

---

## 📌 Autenticação
Use o token JWT retornado no login no header:
```
Authorization: Bearer seu_token_aqui
```
