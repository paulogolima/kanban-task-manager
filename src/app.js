import express from 'express';
import userRoutes from './routes/userRoutes.js';
import boardRoutes from './routes/boardRoutes.js';


const app = express();

// Middlewares - Configurando para o Express entender JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota de teste
app.get('/', (req, res) => {
  res.json({ mensagem: 'API de Tarefas está rodando!' });
});

// Registrando o arquivo de rotas que acabamos de criar!
// Isso significa que tudo no userRoutes responderá no caminho "/users"
app.use('/users', userRoutes);
app.use('/boards', boardRoutes);

export default app;