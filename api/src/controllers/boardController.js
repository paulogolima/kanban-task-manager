/**
 * BOARD CONTROLLER — Endpoints de Quadros
 * Arquivo: src/controllers/boardController.js
 */

import db from '../config/database.js';

const { Quadro, Tarefa } = db.models;

export const createBoard = async (req, res) => {
  try {
    const { nome, descricao, idUsuario } = req.body;

    if (!nome || !idUsuario) {
      return res.status(400).json({ erro: 'Nome e idUsuario são obrigatórios' });
    }

    const quadro = await Quadro.create({ nome, descricao, idUsuario });
    return res.status(201).json(quadro);
  } catch (error) {
    console.error('Erro ao criar quadro:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const getBoards = async (req, res) => {
  try {
    const { idUsuario } = req.query;
    
    const where = idUsuario ? { idUsuario } : {};
    const quadros = await Quadro.findAll({ 
      where,
      include: [{ association: 'Tarefas' }]
    });

    return res.status(200).json(quadros);
  } catch (error) {
    console.error('Erro ao listar quadros:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const getBoardById = async (req, res) => {
  try {
    const { id } = req.params;
    const quadro = await Quadro.findByPk(id, {
      include: [{ association: 'Tarefas' }]
    });

    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' });
    }

    return res.status(200).json(quadro);
  } catch (error) {
    console.error('Erro ao obter quadro:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const updateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, descricao } = req.body;

    const quadro = await Quadro.findByPk(id);
    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' });
    }

    await quadro.update({ nome, descricao });
    return res.status(200).json(quadro);
  } catch (error) {
    console.error('Erro ao atualizar quadro:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const quadro = await Quadro.findByPk(id);

    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' });
    }

    await quadro.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar quadro:', error);
    return res.status(500).json({ erro: error.message });
  }
};
