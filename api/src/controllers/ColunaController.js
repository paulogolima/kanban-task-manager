import db from '../models/index.js'

export const criar = async (req, res) => {
  try {
    const { quadro_id, titulo } = req.body
    const coluna = await db.Coluna.create({ quadro_id, titulo })
    res.status(201).json(coluna)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const colunas = await db.Coluna.findAll({
      where: { quadro_id: req.query.quadro_id },
      include: [{ model: db.Cartao, include: [{ model: db.Comentario }] }]
    })
    res.json(colunas)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const coluna = await db.Coluna.findByPk(req.params.id, {
      include: [{ model: db.Cartao, include: [{ model: db.Comentario }] }]
    })
    if (!coluna) return res.status(404).json({ erro: 'Coluna não encontrada' })
    res.json(coluna)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const coluna = await db.Coluna.findByPk(req.params.id)
    if (!coluna) return res.status(404).json({ erro: 'Coluna não encontrada' })
    if (req.body.titulo) coluna.titulo = req.body.titulo
    await coluna.save()
    res.json(coluna)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const coluna = await db.Coluna.findByPk(req.params.id)
    if (!coluna) return res.status(404).json({ erro: 'Coluna não encontrada' })
    await coluna.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
