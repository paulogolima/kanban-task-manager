import db from '../models/index.js'

const Quadro = db.Quadro
const User = db.User

export const criar = async (req, res) => {
  try {
    const { titulo, descricao } = req.body
    const userId = req.user.id

    if (!titulo) {
      return res.status(400).json({ erro: 'Título é obrigatório' })
    }

    const quadro = await Quadro.create({
      titulo,
      descricao,
      user_id: userId
    })

    res.status(201).json(quadro)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const listar = async (req, res) => {
  try {
    const userId = req.user.id

    const quadros = await Quadro.findAll({
      where: { user_id: userId },
      include: [
        { model: User, as: 'criador', attributes: ['id', 'nome', 'email'] },
        { model: db.Coluna }
      ]
    })

    res.json(quadros)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const { id } = req.params
    const userId = req.user.id

    const quadro = await Quadro.findOne({
      where: { id },
      include: [
        { model: User, as: 'criador', attributes: ['id', 'nome', 'email'] },
        { model: db.Coluna },
        { model: db.Etiqueta },
        { model: db.Atividade }
      ]
    })

    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' })
    }

    if (quadro.user_id !== userId && !quadro.participantes?.find(p => p.id === userId)) {
      return res.status(403).json({ erro: 'Acesso negado' })
    }

    res.json(quadro)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { titulo, descricao } = req.body
    const userId = req.user.id

    const quadro = await Quadro.findByPk(id)
    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' })
    }

    if (quadro.user_id !== userId) {
      return res.status(403).json({ erro: 'Acesso negado' })
    }

    if (titulo) quadro.titulo = titulo
    if (descricao) quadro.descricao = descricao

    await quadro.save()
    res.json(quadro)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const deletar = async (req, res) => {
  try {
    const { id } = req.params
    const userId = req.user.id

    const quadro = await Quadro.findByPk(id)
    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' })
    }

    if (quadro.user_id !== userId) {
      return res.status(403).json({ erro: 'Acesso negado' })
    }

    await quadro.destroy()
    res.status(204).send()
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const adicionarParticipante = async (req, res) => {
  try {
    const { id } = req.params
    const { usuario_id } = req.body
    const userId = req.user.id

    const quadro = await Quadro.findByPk(id)
    if (!quadro) {
      return res.status(404).json({ erro: 'Quadro não encontrado' })
    }

    if (quadro.user_id !== userId) {
      return res.status(403).json({ erro: 'Acesso negado' })
    }

    await quadro.addParticipantes(usuario_id)
    res.json({ mensagem: 'Participante adicionado' })
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
