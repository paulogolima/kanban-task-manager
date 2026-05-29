import db from '../models/index.js'

export const criar = async (req, res) => {
  try {
    const { cartao_id, conteudo } = req.body
    const comentario = await db.Comentario.create({
      cartao_id,
      user_id: req.user.id,
      conteudo
    })
    const resultado = await db.Comentario.findByPk(comentario.id, {
      include: [{ model: db.User, attributes: ['id', 'nome'] }]
    })
    res.status(201).json(resultado)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const comentarios = await db.Comentario.findAll({
      where: { cartao_id: req.query.cartao_id },
      include: [{ model: db.User, attributes: ['id', 'nome'] }]
    })
    res.json(comentarios)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const comentario = await db.Comentario.findByPk(req.params.id, {
      include: [{ model: db.User, attributes: ['id', 'nome'] }]
    })
    if (!comentario) return res.status(404).json({ erro: 'Comentario nao encontrado' })
    res.json(comentario)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const comentario = await db.Comentario.findByPk(req.params.id)
    if (!comentario) return res.status(404).json({ erro: 'Comentario nao encontrado' })
    await comentario.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
