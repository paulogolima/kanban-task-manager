import db from '../models/index.js'

export const criar = async (req, res) => {
  try {
    const { titulo } = req.body
    const quadro = await db.Quadro.create({ titulo, user_id: req.user.id })
    res.status(201).json(quadro)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const quadros = await db.Quadro.findAll({
      where: { user_id: req.user.id },
      include: [{ model: db.Coluna, include: [{ model: db.Cartao }] }]
    })
    res.json(quadros)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const quadro = await db.Quadro.findByPk(req.params.id, {
      include: [{ model: db.Coluna, include: [{ model: db.Cartao }] }]
    })
    if (!quadro) return res.status(404).json({ erro: 'Quadro não encontrado' })
    res.json(quadro)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const quadro = await db.Quadro.findByPk(req.params.id)
    if (!quadro) return res.status(404).json({ erro: 'Quadro não encontrado' })
    if (quadro.user_id !== req.user.id) return res.status(403).json({ erro: 'Acesso negado' })

    if (req.body.titulo) quadro.titulo = req.body.titulo
    await quadro.save()
    res.json(quadro)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const quadro = await db.Quadro.findByPk(req.params.id)
    if (!quadro) return res.status(404).json({ erro: 'Quadro não encontrado' })
    if (quadro.user_id !== req.user.id) return res.status(403).json({ erro: 'Acesso negado' })

    await quadro.destroy()
    res.json({ mensagem: 'Quadro deletado com sucesso' })
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
