import { DataTypes } from 'sequelize';
import conexao from '../config/database.js';

import UsuarioModel from './User.js';
import QuadroModel from './Board.js';
import TarefaModel from './Task.js';

// Inicializando os modelos
const db = {
  Usuario: UsuarioModel(conexao, DataTypes),
  Quadro: QuadroModel(conexao, DataTypes),
  Tarefa: TarefaModel(conexao, DataTypes)
};

// Configurando os relacionamentos (como o HasMany / BelongsTo)
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Anexando a conexão para poder exportar tudo junto
db.conexao = conexao;

export default db;