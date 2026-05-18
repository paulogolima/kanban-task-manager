import db from '../models/index.js'

const Comentario = db.Comentario
const Cartao = db.Cartao

export const criar = async (req, res) => {
  try {
    const { cartao_id, conteudo } = req.body
    const usuario_id = req.user.id

    if (!cartao_id || !conteudo) {
      return res.status(400).json({ erro: 'Cartão ID e conteúdo são obrigatórios' })
    }

    const cartao = await Cartao.findByPk(cartao_id)
    if (!cartao) {
      return res.status(404).json({ erro: 'Cartão não encontrado' })
    }

    const comentario = await Comentario.create({
      cartao_id,
      usuario_id,
      conteudo
    })

    const comentarioComUsuario = await Comentario.findByPk(comentario.id, {
      include: [{ model: db.User, attributes: ['id', 'nome'] }]
    })

    res.status(201).json(comentarioComUsuario)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const { cartao_id } = req.query

    const comentarios = await Comentario.findAll({
      where: cartao_id ? { cartao_id } : {},
      include: [{ model: db.User, attributes: ['id', 'nome', 'email'] }]
    })

    res.json(comentarios)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const { id } = req.params

    const comentario = await Comentario.findByPk(id, {
      include: [{ model: db.User, attributes: ['id', 'nome', 'email'] }]
    })

    if (!comentario) {
      return res.status(404).json({ erro: 'Comentário não encontrado' })
    }

    res.json(comentario)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { conteudo } = req.body
    const userId = req.user.id

    const comentario = await Comentario.findByPk(id)
    if (!comentario) {
      return res.status(404).json({ erro: 'Comentário não encontrado' })
    }

    if (comentario.usuario_id !== userId) {
      return res.status(403).json({ erro: 'Acesso negado' })
    }

    if (conteudo) comentario.conteudo = conteudo

    await comentario.save()
    res.json(comentario)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const { id } = req.params
    const userId = req.user.id

    const comentario = await Comentario.findByPk(id)
    if (!comentario) {
      return res.status(404).json({ erro: 'Comentário não encontrado' })
    }

    if (comentario.usuario_id !== userId) {
      return res.status(403).json({ erro: 'Acesso negado' })
    }

    await comentario.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
