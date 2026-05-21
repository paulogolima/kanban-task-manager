# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar package files
COPY package*.json ./

# Instalar apenas dependências de produção
RUN npm ci --omit=dev

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copiar node_modules do builder
COPY --from=builder /app/node_modules ./node_modules

# Copiar package files
COPY package*.json ./

# Copiar código fonte
COPY src ./src
COPY start.js .

# Criar usuário não-root por segurança
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001
USER nodejs

# Expor porta
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})" || exit 1

# Variáveis de ambiente
ENV NODE_ENV=production
ENV PORT=3000

# Comando para iniciar
CMD ["node", "start.js"]
