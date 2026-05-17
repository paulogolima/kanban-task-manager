import db from '../models/index.js';

const { Quadro } = db;

export const buscarTodos = async (req, res) => {
  try {
    const quadros = await Quadro.findAll();

    return res.status(200).json(quadros);
    } catch (erro) {
        return res.status(500).json({ erro: 'Erro ao buscar quadros', detalhe: erro.message });
    }
};