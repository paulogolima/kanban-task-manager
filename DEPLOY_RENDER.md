# Deploy na Render

## Passos para Deploy

### 1. Preparação do Repositório

```bash
git add -A
git commit -m "Configuração para produção - Render"
git push origin main
```

### 2. Criar Conta Render

- Acesse: https://render.com
- Crie uma conta (GitHub/Google)
- Conecte seu repositório

### 3. Deploy Automático

**Opção A: Dashboard Manual**

1. Click em "New" → "Web Service"
2. Conecte seu repositório GitHub
3. Configure:
   - **Name**: kanban-api
   - **Root Directory**: `api`
   - **Build Command**: `npm ci`
   - **Start Command**: `npm start`
   - **Instance Type**: Free

4. Crie PostgreSQL:
   - Click "New" → "PostgreSQL"
   - Configure as variáveis de ambiente

**Opção B: Arquivo YAML (Render Deploy)**

```bash
# Na raiz do projeto, existe render.yaml
# Render lerá automaticamente e criará os serviços
```

### 4. Variáveis de Ambiente

Configure no dashboard da Render:

```
NODE_ENV=production
PORT=3000
DB_HOST=seu-database-host.render.com
DB_PORT=5432
DB_USER=postgres
DB_PASSWORD=sua_senha_segura
DB_NAME=kanban_db
JWT_SECRET=gere_uma_chave_segura_com_32_chars
CORS_ORIGIN=https://seu-frontend.com
```

### 5. Verificar Deploy

```bash
# Logs em tempo real
# Dashboard → Service → Logs

# Testar API
curl https://seu-app.render.com/
```

---

## Remover Arquivos de Desenvolvimento

Os seguintes arquivos serão ignorados no git:

- `docker-compose.yml` (apenas local)
- `README_SETUP.md`
- `README.DOCKER.md`
- `SETUP.ps1`
- `STATUS_SETUP.md`
- `.env.docker`
- `.sequelizerc` (opcional)

---

## Troubleshooting

### API retorna erro de conexão BD

- Verifique se PostgreSQL está rodando no Render
- Confirme credenciais do banco
- Veja logs: `Dashboard → Database → Logs`

### Build fail

```bash
# Verifique node_modules não está commitado
git rm --cached -r node_modules
echo "node_modules/" >> .gitignore
git commit -m "Remove node_modules"
git push
```

---

## URLs Úteis

- Dashboard Render: https://dashboard.render.com
- Documentação: https://render.com/docs
- Status: https://status.render.com

---

## Próximos Passos

1. Commit final e push
2. Deploy no Render
3. Configure domínio customizado (opcional)
4. Setup automático de backups (PostgreSQL)
