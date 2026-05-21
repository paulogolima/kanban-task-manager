# 🚀 Deploy na Render - Guia Rápido

## 1. Preparação

```bash
git add -A
git commit -m "Preparar para produção - Render"
git push origin main
```

## 2. Acessar Render

- 🌐 Acesse: https://render.com
- 📝 Crie conta (GitHub, Google, etc)
- 🔗 Conecte repositório GitHub

## 3. Deploy Automático

### Opção A: Via render.yaml (RECOMENDADO)

1. Render lerá automaticamente o arquivo `render.yaml`
2. Clique em **New** → **Blueprint**
3. Selecione seu repositório
4. Deploy automático será criado

### Opção B: Dashboard Manual

1. **New** → **Web Service**
2. Configure:
   - **Name**: kanban-api
   - **Runtime**: Docker
   - **Dockerfile Path**: api/Dockerfile
   - **Build Command**: deixe vazio
   - **Start Command**: deixe vazio

3. Crie PostgreSQL:
   - **New** → **PostgreSQL**
   - Nome: kanban-db
   - Plan: Free

## 4. Variáveis de Ambiente

Configure no dashboard Render:

```
NODE_ENV=production
PORT=3000
JWT_SECRET=gere_uma_chave_secreta_com_32_caracteres_aqui
CORS_ORIGIN=*
```

Database será conectado automaticamente via `fromDatabase`.

## 5. Verificar Deploy

- 📊 Dashboard → seu-app → Logs
- 🌐 Seu app estará em: `https://seu-app.render.com`
- 🔍 Teste: `curl https://seu-app.render.com/`

## 6. Compartilhar URL

Envie para outro usuário:

```
URL Base: https://seu-app.render.com
API Endpoint: https://seu-app.render.com/api
```

Flutter pode usar:

```dart
final apiUrl = 'https://seu-app.render.com/api';
```

---

## ⚠️ Importantes

- ✅ Dockerfile está em `api/Dockerfile`
- ✅ render.yaml está na raiz
- ✅ Package.json tem script `start`
- ✅ Variáveis de ambiente configuráveis

## 🔗 Links Úteis

- https://render.com/docs
- https://render.com/dashboard
- https://status.render.com

---

## Troubleshooting

### Build Fail

```bash
# Limpe cache e trigger novo build
git commit --allow-empty -m "Trigger Render deploy"
git push origin main
```

### PostgreSQL não conecta

- Verifique se database foi criado
- Copie host, user, password das variáveis
- Aguarde database ficar "available"

### API retorna 502

- Veja logs do serviço
- Verifique JWT_SECRET definido
- Confirme database está saudável

