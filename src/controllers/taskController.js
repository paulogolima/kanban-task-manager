/**
 * TASK CONTROLLER — Endpoints de Tarefas
 * Arquivo: src/controllers/taskController.js
 */

import db from '../config/database.js';

const { Tarefa } = db.models;

export const createTask = async (req, res) => {
  try {
    const { titulo, descricao, status, prioridade, dataVencimento, idUsuario, idQuadro } = req.body;

    if (!titulo || !idQuadro) {
      return res.status(400).json({ erro: 'Título e idQuadro são obrigatórios' });
    }

    const tarefa = await Tarefa.create({
      titulo,
      descricao,
      status: status || 'A_FAZER',
      prioridade: prioridade || 'MEDIA',
      dataVencimento,
      idUsuario,
      idQuadro
    });

    return res.status(201).json(tarefa);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const { idQuadro, status } = req.query;
    
    const where = {};
    if (idQuadro) where.idQuadro = idQuadro;
    if (status) where.status = status;

    const tarefas = await Tarefa.findAll({ where });
    return res.status(200).json(tarefas);
  } catch (error) {
    console.error('Erro ao listar tarefas:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    return res.status(200).json(tarefa);
  } catch (error) {
    console.error('Erro ao obter tarefa:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, status, prioridade, dataVencimento } = req.body;

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    await tarefa.update({ titulo, descricao, status, prioridade, dataVencimento });
    return res.status(200).json(tarefa);
  } catch (error) {
    console.error('Erro ao atualizar tarefa:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const updateTaskStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ erro: 'Status é obrigatório' });
    }

    const tarefa = await Tarefa.findByPk(id);
    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    await tarefa.update({ status });
    return res.status(200).json(tarefa);
  } catch (error) {
    console.error('Erro ao atualizar status:', error);
    return res.status(500).json({ erro: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const tarefa = await Tarefa.findByPk(id);

    if (!tarefa) {
      return res.status(404).json({ erro: 'Tarefa não encontrada' });
    }

    await tarefa.destroy();
    return res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar tarefa:', error);
    return res.status(500).json({ erro: error.message });
  }
};
