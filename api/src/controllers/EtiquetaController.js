import db from '../models/index.js'

const Etiqueta = db.Etiqueta
const Quadro = db.Quadro

export const criar = async (req, res) => {
  try {
    const { quadro_id, nome, cor } = req.body

    if (!quadro_id || !nome) {
      return res.status(400).json({ erro: 'Quadro ID e nome são obrigatórios' })
    }

    const quadro = await Quadro.findByPk(quadro_id)
    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' })
    }

    const etiqueta = await Etiqueta.create({
      quadro_id,
      nome,
      cor: cor || '#000000'
    })

    res.status(201).json(etiqueta)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const { quadro_id } = req.query

    const etiquetas = await Etiqueta.findAll({
      where: quadro_id ? { quadro_id } : {}
    })

    res.json(etiquetas)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const { id } = req.params

    const etiqueta = await Etiqueta.findByPk(id)
    if (!etiqueta) {
      return res.status(404).json({ erro: 'Etiqueta não encontrada' })
    }

    res.json(etiqueta)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { nome, cor } = req.body

    const etiqueta = await Etiqueta.findByPk(id)
    if (!etiqueta) {
      return res.status(404).json({ erro: 'Etiqueta não encontrada' })
    }

    if (nome) etiqueta.nome = nome
    if (cor) etiqueta.cor = cor

    await etiqueta.save()
    res.json(etiqueta)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const { id } = req.params

    const etiqueta = await Etiqueta.findByPk(id)
    if (!etiqueta) {
      return res.status(404).json({ erro: 'Etiqueta não encontrada' })
    }

    await etiqueta.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
