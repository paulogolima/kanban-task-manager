import db from '../models/index.js';

// No JS podemos fazer "desestruturação" para pegar apenas o Usuario do nosso 'db'
const { Usuario } = db;

// GET /users -> Buscar todos os usuários
export const buscarTodos = async (req, res) => {
  try {
    // Equivalente a: _context.Usuarios.ToListAsync() do C# EF Core
    const usuarios = await Usuario.findAll();
    return res.status(200).json(usuarios);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao buscar usuários', detalhe: erro.message });
  }
};

// POST /users -> Criar um novo usuário
export const criar = async (req, res) => {
  try {
    // Pegando as informações do corpo (body) da requisição
    const { nome, email, senha } = req.body;
    
    // Equivalente a _context.Usuarios.Add() + _context.SaveChangesAsync()
    const novoUsuario = await Usuario.create({ nome, email, senha });
    
    return res.status(201).json(novoUsuario);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao criar usuário', detalhe: erro.message });
  }
};