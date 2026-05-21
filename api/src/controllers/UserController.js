/**
 * USER CONTROLLER — Endpoints de Usuários
 * Arquivo: src/controllers/userController.js
 */

import db from '../config/database.js';

const { Usuario } = db.models;

export const createUser = async (req, res) => {
  try {
    const { nome, email, senha } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' });
    }

    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Email já cadastrado' });
    }

    const usuario = await Usuario.create({ nome, email, senha });
    return res.status(201).json(usuario);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' });
    }

    const usuario = await Usuario.findOne({ where: { email } });
    
    if (!usuario || usuario.senha !== senha) {
      return res.status(401).json({ erro: 'Credenciais inválidas' });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    return res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro ao obter usuário:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const usuario = await Usuario.findByPk(id);
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    await usuario.update({ nome, email, senha });
    return res.status(200).json(usuario);
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const usuario = await Usuario.findByPk(id);

    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    await usuario.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    return res.status(500).json({ erro: error.message });
  }
};
