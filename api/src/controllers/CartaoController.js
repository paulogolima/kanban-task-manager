import db from '../models/index.js'

const Cartao = db.Cartao
const Coluna = db.Coluna

export const criar = async (req, res) => {
  try {
    const { coluna_id, titulo, descricao, prioridade, prazo, posicao } = req.body

    if (!coluna_id || !titulo) {
      return res.status(400).json({ erro: 'Coluna ID e título são obrigatórios' })
    }

    const coluna = await Coluna.findByPk(coluna_id)
    if (!coluna) {
      return res.status(404).json({ erro: 'Coluna não encontrada' })
    }

    const cartao = await Cartao.create({
      coluna_id,
      titulo,
      descricao,
      prioridade: prioridade || 'média',
      prazo,
      posicao: posicao || 0
    })

    res.status(201).json(cartao)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const { coluna_id } = req.query

    const cartoes = await Cartao.findAll({
      where: coluna_id ? { coluna_id } : {},
      include: [
        { model: db.Comentario, include: [{ model: db.User, attributes: ['id', 'nome'] }] },
        { model: db.Etiqueta },
        { model: db.User, as: 'responsaveis', attributes: ['id', 'nome', 'email'] }
      ]
    })

    res.json(cartoes)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const { id } = req.params

    const cartao = await Cartao.findByPk(id, {
      include: [
        { model: db.Comentario, include: [{ model: db.User, attributes: ['id', 'nome'] }] },
        { model: db.Etiqueta },
        { model: db.User, as: 'responsaveis', attributes: ['id', 'nome', 'email'] }
      ]
    })

    if (!cartao) {
      return res.status(404).json({ erro: 'Cartão não encontrado' })
    }

    res.json(cartao)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, descricao, prioridade, prazo, posicao } = req.body

    const cartao = await Cartao.findByPk(id)
    if (!cartao) {
      return res.status(404).json({ erro: 'Cartão não encontrado' })
    }

    if (titulo) cartao.titulo = titulo
    if (descricao) cartao.descricao = descricao
    if (prioridade) cartao.prioridade = prioridade
    if (prazo) cartao.prazo = prazo
    if (posicao !== undefined) cartao.posicao = posicao

    await cartao.save()
    res.json(cartao)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const { id } = req.params

    const cartao = await Cartao.findByPk(id)
    if (!cartao) {
      return res.status(404).json({ erro: 'Cartão não encontrado' })
    }

    await cartao.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const adicionarResponsavel = async (req, res) => {
  try {
    const { id } = req.params
    const { usuario_id } = req.body

    const cartao = await Cartao.findByPk(id)
    if (!cartao) {
      return res.status(404).json({ erro: 'Cartão não encontrado' })
    }

    await cartao.addResponsaveis(usuario_id)
    res.json({ mensagem: 'Responsável adicionado' })
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const adicionarEtiqueta = async (req, res) => {
  try {
    const { id } = req.params
    const { etiqueta_id } = req.body

    const cartao = await Cartao.findByPk(id)
    if (!cartao) {
      return res.status(404).json({ erro: 'Cartão não encontrado' })
    }

    await cartao.addEtiqueta(etiqueta_id)
    res.json({ mensagem: 'Etiqueta adicionada' })
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
