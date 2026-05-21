# 🐳 Guia de Deploy com Docker

## Pré-requisitos

- **Docker**: https://www.docker.com/products/docker-desktop
- **Docker Compose**: Já vem incluído no Docker Desktop

## 🚀 Como Rodar com Docker

### 1. Build e Start dos Containers

```bash
cd api
docker-compose up -d
```

Isso vai:
- ✅ Criar e rodar o container do PostgreSQL
- ✅ Criar e rodar o container da API
- ✅ Criar a rede para comunicação entre containers
- ✅ Iniciar automaticamente

### 2. Verificar Status

```bash
# Ver containers rodando
docker-compose ps

# Ver logs da API
docker-compose logs -f api

# Ver logs do PostgreSQL
docker-compose logs postgres
```

### 3. Parar os Containers

```bash
docker-compose down
```

### 4. Remover Volumes (limpar dados do BD)

```bash
docker-compose down -v
```

---

## 🌐 Acessar de Outro Computador

### Mesma Rede Local
```
http://<seu-ip-windows>:3000
```

Exemplo: `http://192.168.1.100:3000`

### Redes Diferentes (Internet)

Use **Ngrok** para expor externamente:

```bash
# Instale ngrok: https://ngrok.com/download
ngrok http 3000
```

Você vai receber uma URL tipo:
```
https://xxxxx-xxx-xxx-xxx.ngrok.io
```

Compartilhe essa URL com quem quiser acessar!

---

## 📝 Variáveis de Ambiente

Se precisar alterar as variáveis, edite `docker-compose.yml` na seção `environment` do serviço `api`.

**Importante**: A API dentro do Docker conecta ao PostgreSQL usando `DB_HOST=postgres` (nome do serviço).

---

## 🔍 Troubleshooting

### Porta 3000 já está em uso

```bash
# Altere no docker-compose.yml:
# ports:
#   - "8080:3000"  # Agora acessa em :8080
```

### PostgreSQL não conecta

Verifique se o container está rodando:
```bash
docker ps
```

Se não aparecer:
```bash
docker-compose logs postgres
```

### Resetar tudo

```bash
docker-compose down -v
docker-compose up -d
```

---

## 📊 Arquitetura

```
Cliente (Outro PC)
    ↓
:3000 (Host Machine)
    ↓
Docker Container API
    ↓
Docker Container PostgreSQL
```

Ambos os containers estão na mesma rede interna `kanban_network`, então se comunicam perfeitamente!

---

## ⚙️ Comandos Úteis

```bash
# Rebuild da imagem
docker-compose up --build -d

# Limpar imagens desnecessárias
docker image prune

# Ver detalhes de um container
docker inspect kanban_api

# Entrar no container (debug)
docker exec -it kanban_api sh
docker exec -it kanban_postgres psql -U postgres
```

---

## 🎯 Resumo Rápido

```bash
# Start
docker-compose up -d

# Logs
docker-compose logs -f api

# Stop
docker-compose down

# Start novamente
docker-compose up -d
```

Pronto! 🎉 Sua API está rodando em Docker e pronta para ser acessada de qualquer lugar! 🚀
