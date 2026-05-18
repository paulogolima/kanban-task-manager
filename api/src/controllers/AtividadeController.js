import db from '../models/index.js'

const Atividade = db.Atividade

export const listar = async (req, res) => {
  try {
    const { usuario_id, quadro_id, cartao_id } = req.query

    const filtro = {}
    if (usuario_id) filtro.usuario_id = usuario_id
    if (quadro_id) filtro.quadro_id = quadro_id
    if (cartao_id) filtro.cartao_id = cartao_id

    const atividades = await Atividade.findAll({
      where: filtro,
      include: [
        { model: db.User, attributes: ['id', 'nome'] },
        { model: db.Quadro, attributes: ['id', 'titulo'] },
        { model: db.Cartao, attributes: ['id', 'titulo'] }
      ],
      order: [['created_at', 'DESC']]
    })

    res.json(atividades)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obter = async (req, res) => {
  try {
    const { id } = req.params

    const atividade = await Atividade.findByPk(id, {
      include: [
        { model: db.User, attributes: ['id', 'nome'] },
        { model: db.Quadro, attributes: ['id', 'titulo'] },
        { model: db.Cartao, attributes: ['id', 'titulo'] }
      ]
    })

    if (!atividade) {
      return res.status(404).json({ erro: 'Atividade não encontrada' })
    }

    res.json(atividade)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}

export const obterPorUsuario = async (req, res) => {
  try {
    const userId = req.user.id

    const atividades = await Atividade.findAll({
      where: { usuario_id: userId },
      include: [
        { model: db.Quadro, attributes: ['id', 'titulo'] },
        { model: db.Cartao, attributes: ['id', 'titulo'] }
      ],
      order: [['created_at', 'DESC']]
    })

    res.json(atividades)
  } catch (erro) {
    res.status(500).json({ erro: erro.message })
  }
}
