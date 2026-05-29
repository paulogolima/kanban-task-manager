import db from '../models/index.js'

export const criar = async (req, res) => {
  try {
    const { coluna_id, titulo } = req.body
    const cartao = await db.Cartao.create({ coluna_id, titulo })
    res.status(201).json(cartao)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const cartoes = await db.Cartao.findAll({
      where: { coluna_id: req.query.coluna_id },
      include: [{
        model: db.Comentario,
        include: [{ model: db.User, attributes: ['id', 'nome'] }]
      }]
    })
    res.json(cartoes)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const cartao = await db.Cartao.findByPk(req.params.id, {
      include: [{
        model: db.Comentario,
        include: [{ model: db.User, attributes: ['id', 'nome'] }]
      }]
    })
    if (!cartao) return res.status(404).json({ erro: 'Cartão não encontrado' })
    res.json(cartao)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const cartao = await db.Cartao.findByPk(req.params.id)
    if (!cartao) return res.status(404).json({ erro: 'Cartão não encontrado' })
    if (req.body.titulo) cartao.titulo = req.body.titulo
    await cartao.save()
    res.json(cartao)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const cartao = await db.Cartao.findByPk(req.params.id)
    if (!cartao) return res.status(404).json({ erro: 'Cartão não encontrado' })
    await cartao.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
