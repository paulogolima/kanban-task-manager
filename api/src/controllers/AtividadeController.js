import db from '../models/index.js'

export const listar = async (req, res) => {
  try {
    const atividades = await db.Atividade.findAll()
    res.json(atividades)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const criar = async (req, res) => {
  try {
    const { descricao } = req.body
    const atividade = await db.Atividade.create({ descricao })
    res.status(201).json(atividade)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
