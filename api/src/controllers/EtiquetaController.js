import db from '../models/index.js'

export const criar = async (req, res) => {
  try {
    const { nome } = req.body
    const etiqueta = await db.Etiqueta.create({ nome })
    res.status(201).json(etiqueta)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const etiquetas = await db.Etiqueta.findAll()
    res.json(etiquetas)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const etiqueta = await db.Etiqueta.findByPk(req.params.id)
    if (!etiqueta) return res.status(404).json({ erro: 'Etiqueta não encontrada' })
    res.json(etiqueta)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const etiqueta = await db.Etiqueta.findByPk(req.params.id)
    if (!etiqueta) return res.status(404).json({ erro: 'Etiqueta não encontrada' })
    await etiqueta.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
