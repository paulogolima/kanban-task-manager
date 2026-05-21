import db from '../models/index.js'

const Coluna = db.Coluna
const Quadro = db.Quadro

export const criar = async (req, res) => {
  try {
    const { quadro_id, titulo, posicao } = req.body

    if (!quadro_id || !titulo) {
      return res.status(400).json({ erro: 'Quadro ID e título são obrigatórios' })
    }

    const quadro = await Quadro.findByPk(quadro_id)
    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' })
    }

    const coluna = await Coluna.create({
      quadro_id,
      titulo,
      posicao: posicao || 0
    })

    res.status(201).json(coluna)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const { quadro_id } = req.query

    const colunas = await Coluna.findAll({
      where: quadro_id ? { quadro_id } : {},
      include: [{ model: db.Cartao }]
    })

    res.json(colunas)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const { id } = req.params

    const coluna = await Coluna.findByPk(id, {
      include: [{ model: db.Cartao }]
    })

    if (!coluna) {
      return res.status(404).json({ erro: 'Coluna não encontrada' })
    }

    res.json(coluna)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, posicao } = req.body

    const coluna = await Coluna.findByPk(id)
    if (!coluna) {
      return res.status(404).json({ erro: 'Coluna não encontrada' })
    }

    if (titulo) coluna.titulo = titulo
    if (posicao !== undefined) coluna.posicao = posicao

    await coluna.save()
    res.json(coluna)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const { id } = req.params

    const coluna = await Coluna.findByPk(id)
    if (!coluna) {
      return res.status(404).json({ erro: 'Coluna não encontrada' })
    }

    await coluna.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
