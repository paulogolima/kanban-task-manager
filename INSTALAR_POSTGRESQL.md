# ⚠️ POSTGRESQL NÃO ENCONTRADO

## O Problema

O backend não consegue conectar ao PostgreSQL porque:
- ❌ PostgreSQL não está instalado
- ❌ PostgreSQL não está no PATH
- ❌ PostgreSQL não está rodando

---

## ✅ Solução Rápida (10 minutos)

### PASSO 1: Instalar PostgreSQL

#### Windows:
1. Acesse: https://www.postgresql.org/download/windows/
2. Baixe a versão mais recente (15.x ou 16.x)
3. Execute o instalador
4. **IMPORTANTE:** Quando pedir password do usuário `postgres`, use: **postgres**
5. Marque opções:
   - ☑️ PostgreSQL Server
   - ☑️ pgAdmin 4 (GUI para gerenciar)
   - ☑️ Command Line Tools (psql)
6. Instale no caminho padrão

#### macOS:
```bash
brew install postgresql@15
brew services start postgresql@15
```

#### Linux (Ubuntu/Debian):
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo service postgresql start
```

---

### PASSO 2: Verificar Instalação

Abra PowerShell e teste:

```powershell
psql --version
# Esperado: psql (PostgreSQL) 15.x ou 16.x
```

Se não funcionar, adicione ao PATH:
- Windows: Procure por "Environment Variables"
- Adicione: `C:\Program Files\PostgreSQL\15\bin`
- Reinicie o terminal

---

### PASSO 3: Criar Banco de Dados

```powershell
# Conectar ao PostgreSQL
psql -U postgres

# Dentro do PostgreSQL, digite:
CREATE DATABASE kanban_db;
\q

# Esperado: deve criar sem erro
```

---

### PASSO 4: Executar Backend

```powershell
cd "c:\Users\keven\OneDrive\Desktop\front kamban\kanban-backend"

# Rodar com o novo script
node start.js
```

**Esperado:**
```
✅ Conexão com banco de dados estabelecida!
✅ Models sincronizados com sucesso!
✅ SISTEMA PRONTO!

📌 Backend: http://localhost:3000
📌 Frontend: http://localhost:19006
```

---

## 🧪 Teste Rápido (Em outro terminal)

```powershell
# Testar se backend está respondendo
curl http://localhost:3000/api/boards

# Esperado:
# [{"id":1,"nome":"Projeto API",...}]
```

---

## 🎯 Tempo Estimado

| Etapa | Tempo |
|-------|-------|
| Baixar PostgreSQL | 2 min |
| Instalar PostgreSQL | 5 min |
| Criar banco | 1 min |
| Rodar backend | 2 min |
| **Total** | **~10 min** |

---

## 🆘 Troubleshooting

### "psql: command not found"
- PostgreSQL não está no PATH
- Solução: Reinstale e marque "Add to PATH"

### "connection refused"
- PostgreSQL não está rodando
- Windows: Services → PostgreSQL → Start
- macOS: `brew services start postgresql`
- Linux: `sudo service postgresql start`

### "database does not exist"
- Banco não foi criado
- Solução: `CREATE DATABASE kanban_db;` em psql

### "permission denied / FATAL: Ident authentication failed"
- Password do PostgreSQL errado
- Default: `postgres`

---

## 📞 Próximo Passo

Quando PostgreSQL estiver funcionando:

```powershell
cd "c:\Users\keven\OneDrive\Desktop\front kamban\kanban-backend"
node start.js
```

Pronto! Sistema rodando! 🚀

---

**Você consegue! 💪**
