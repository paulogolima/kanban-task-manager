# Seeders - Dados de Teste

Pasta contendo scripts para popular o banco de dados com dados de teste.

## 📁 Estrutura dos Seeders

```
src/seeders/
├── 20260517000001-demo-users.js          # 3 usuários de teste
├── 20260517000002-demo-quadros.js        # 3 quadros/projetos
├── 20260517000003-demo-colunas.js        # 10 colunas/swimlanes
├── 20260517000004-demo-etiquetas.js      # 8 etiquetas/tags
├── 20260517000005-demo-cartoes.js        # 10 cartões/tarefas
├── 20260517000006-demo-comentarios.js    # 5 comentários
└── 20260517000007-demo-cartao-etiquetas.js  # Relações N:M
```

## 🚀 Como Usar

### Rodar todos os seeders (popular o banco)

```bash
npx sequelize-cli db:seed:all
```

### Rodar seeder específico

```bash
npx sequelize-cli db:seed --seed 20260517000001-demo-users
```

### Desfazer todos os seeders (limpar dados)

```bash
npx sequelize-cli db:seed:undo:all
```

### Desfazer seeder específico

```bash
npx sequelize-cli db:seed:undo --seed 20260517000001-demo-users
```

## 📊 Dados Inclusos

### Usuários
- **João Developer** (joao@kanban.com)
- **Maria Project Manager** (maria@kanban.com)
- **Pedro Designer** (pedro@kanban.com)

### Quadros
1. **Projeto API Kanban** - Sistema de gerenciamento de tarefas
2. **Redesign UI/UX** - Atualizar interface do sistema
3. **Mobile App Development** - Desenvolver aplicativo mobile

### Colunas por Quadro
- **Projeto API**: 📋 A Fazer, 🚀 Em Progresso, ✅ Concluído
- **UI/UX**: 📋 A Fazer, 🚀 Em Progresso, ✅ Concluído
- **Mobile**: 📋 Backlog, 🏗️ Desenvolvimento, 🧪 Testes, 🚀 Deploy

### Etiquetas
- Bug, Feature, Urgente, Baixa Prioridade (Projeto API)
- Design, Frontend (UI/UX)
- iOS, Android (Mobile)

### Cartões
10 cartões distribuídos entre as colunas com:
- Títulos e descrições
- Prioridades (alta, média, baixa)
- Prazos definidos
- Posições para ordenação

### Comentários
5 comentários em diferentes cartões com histórico de discussão

### Relacionamentos
Cartões etiquetados com suas respectivas etiquetas

## ⚠️ Importante

> Os seeders usam IDs UUIDs fixos para facilitar testes. Para produção, remova os IDs e deixe o banco gerar automaticamente.

## 📝 Estrutura do Seeder

Cada seeder segue o padrão:

```javascript
module.exports = {
  async up(queryInterface, Sequelize) {
    // Inserir dados
    return queryInterface.bulkInsert('tabela', dados, {});
  },

  async down(queryInterface, Sequelize) {
    // Remover dados (desfazer)
    return queryInterface.bulkDelete('tabela', null, {});
  }
};
```

## 🔗 Relacionamentos

Os seeders respeitam as relações:
- Usuários (owners) → Quadros
- Quadros → Colunas
- Colunas → Cartões
- Cartões → Etiquetas (N:M)
- Cartões → Comentários
- Comentários → Usuários (autor)
