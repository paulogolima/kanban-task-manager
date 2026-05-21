# ==========================================
# SETUP SCRIPT - FocusBoard Backend
# ==========================================

Write-Host "
╔════════════════════════════════════════════════════════════════╗
║         SETUP FOCUSBOARD BACKEND - SCRIPT AUTOMÁTICO          ║
╚════════════════════════════════════════════════════════════════╝
" -ForegroundColor Cyan

$projectPath = "c:\Users\keven\OneDrive\Desktop\front kamban\kanban-backend"
$dbName = "kanban_db"
$dbUser = "postgres"

# ========== PASSO 1: VERIFICAR POSTGRESQL ==========
Write-Host "`n[1/4] Verificando PostgreSQL..." -ForegroundColor Yellow

# Tentar conectar com psql
try {
    $output = & psql.exe --version 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ PostgreSQL instalado" -ForegroundColor Green
    } else {
        throw "PostgreSQL não encontrado"
    }
} catch {
    Write-Host "❌ PostgreSQL não encontrado" -ForegroundColor Red
    Write-Host "Por favor instale PostgreSQL e adicione ao PATH" -ForegroundColor Yellow
    exit 1
}

# ========== PASSO 2: CRIAR BANCO DE DADOS ==========
Write-Host "`n[2/4] Criando banco de dados '$dbName'..." -ForegroundColor Yellow

try {
    # Testar se banco já existe
    $checkDb = & psql.exe -U $dbUser -tc "SELECT 1 FROM pg_database WHERE datname = '$dbName';" 2>&1
    
    if ($checkDb -match "1") {
        Write-Host "✅ Banco '$dbName' já existe" -ForegroundColor Green
    } else {
        # Criar banco
        & psql.exe -U $dbUser -c "CREATE DATABASE $dbName;" 2>&1 | Out-Null
        if ($LASTEXITCODE -eq 0) {
            Write-Host "✅ Banco de dados criado com sucesso" -ForegroundColor Green
        } else {
            Write-Host "⚠️  Erro ao criar banco (já pode existir)" -ForegroundColor Yellow
        }
    }
} catch {
    Write-Host "⚠️  Erro ao verificar/criar banco" -ForegroundColor Yellow
    Write-Host "Você pode criar manualmente no PostgreSQL:" -ForegroundColor Yellow
    Write-Host "  psql -U postgres" -ForegroundColor Gray
    Write-Host "  CREATE DATABASE kanban_db;" -ForegroundColor Gray
}

# ========== PASSO 3: RODAR MIGRATIONS ==========
Write-Host "`n[3/4] Rodando migrations..." -ForegroundColor Yellow

cd $projectPath

try {
    # Tentar rodar com npx sequelize-cli
    & npx.cmd sequelize-cli db:migrate --config src/config/database.js 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Migrations executadas com sucesso" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Falha ao rodar migrations automáticas" -ForegroundColor Yellow
        Write-Host "Tente manualmente: npm run migrate" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Erro ao rodar migrations" -ForegroundColor Yellow
}

# ========== PASSO 4: RODAR SEEDERS ==========
Write-Host "`n[4/4] Populando banco com dados de teste..." -ForegroundColor Yellow

try {
    & npx.cmd sequelize-cli db:seed:all --config src/config/database.js 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Dados de teste inseridos com sucesso" -ForegroundColor Green
    } else {
        Write-Host "⚠️  Falha ao rodar seeds" -ForegroundColor Yellow
    }
} catch {
    Write-Host "⚠️  Erro ao popular banco" -ForegroundColor Yellow
}

# ========== RESUMO FINAL ==========
Write-Host "
╔════════════════════════════════════════════════════════════════╗
║                    SETUP CONCLUÍDO! ✅                        ║
╚════════════════════════════════════════════════════════════════╝

Próximo passo: Rodar o servidor
  cd $projectPath
  node src/server.js

Esperado:
  ✅ Conexão com o banco de dados estabelecida com sucesso!
  🚀 Servidor rodando na porta 3000

Depois, teste com curl:
  curl http://localhost:3000/api/boards
" -ForegroundColor Cyan

# ========== INICIAR SERVIDOR (OPCIONAL) ==========
$answer = Read-Host "Deseja iniciar o servidor agora? (s/n)"

if ($answer -eq "s" -or $answer -eq "y") {
    Write-Host "`nIniciando servidor..." -ForegroundColor Green
    cd $projectPath
    node src/server.js
} else {
    Write-Host "`nPara iniciar o servidor depois, execute:" -ForegroundColor Yellow
    Write-Host "  cd `"$projectPath`"" -ForegroundColor Gray
    Write-Host "  node src/server.js" -ForegroundColor Gray
}
