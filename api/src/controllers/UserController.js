import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../models/index.js'

const User = db.User

export const criar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body

    // Validações
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Nome, email e senha são obrigatórios' })
    }

    if (nome.length > 100) {
      return res.status(400).json({ erro: 'Nome muito longo (máx 100 caracteres)' })
    }

    if (email.length > 100) {
      return res.status(400).json({ erro: 'Email muito longo' })
    }

    const erroSenha = validarSenha(senha)
    if (erroSenha) {
      return res.status(400).json({ erro: erroSenha })
    }

    const usuarioExistente = await User.findOne({ where: { email } })
    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Email já registrado' })
    }

    const senhaHash = await bcrypt.hash(senha, 12)

    const usuario = await User.create({
      nome,
      email,
      senha: senhaHash
    })

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '24h' })

    res.status(201).json({ usuario: { id: usuario.id, nome, email }, token })
  } catch (erro) {
    console.error('Erro no registro:', erro)
    res.status(500).json({ erro: 'Erro ao registrar usuário' })
  }
}

// Login de Usuário
export const login = async (req, res) => {
  try {
    const { email, senha } = req.body

    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' })
    }

    const usuario = await User.findOne({ where: { email } })
    if (!usuario) {
      return res.status(401).json({ erro: 'Credenciais inválidas' })
    }

    const senhaValida = await bcrypt.compare(senha, usuario.senha)
    if (!senhaValida) {
      return res.status(401).json({ erro: 'Credenciais inválidas' })
    }

    const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '24h' })

    res.json({ usuario: { id: usuario.id, nome: usuario.nome, email }, token })
  } catch (erro) {
    console.error('Erro no login:', erro)
    res.status(500).json({ erro: 'Erro ao fazer login' })
  }
}


// Listar Usuários
export const listar = async (req, res) => {
  try {
    const usuarios = await User.findAll({
      attributes: { exclude: ['senha'] }
    })
    res.json(usuarios)
  } catch (erro) {
    console.error('Erro ao listar:', erro)
    res.status(500).json({ erro: 'Erro ao listar usuários' })
  }
}

// Buscar Usuário por Id
export const obter = async (req, res) => {
  try {
    const { id } = req.params
    const usuario = await User.findByPk(id, {
      attributes: { exclude: ['senha'] }
    })
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' })
    }
    res.json(usuario)
  } catch (erro) {
    console.error('Erro ao obter:', erro)
    res.status(500).json({ erro: 'Erro ao obter usuário' })
  }
}

// Atualizar Usuários
export const atualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { nome, email, senha } = req.body

    const usuario = await User.findByPk(id)
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' })
    }

    if (email && email !== usuario.email) {
      if (email.length > 100) {
        return res.status(400).json({ erro: 'Email muito longo' })
      }
      const emailExistente = await User.findOne({ where: { email } })
      if (emailExistente) {
        return res.status(409).json({ erro: 'Email já registrado' })
      }
    }

    if (nome && nome.length > 100) {
      return res.status(400).json({ erro: 'Nome muito longo' })
    }

    if (nome) usuario.nome = nome
    if (email) usuario.email = email
    if (senha) {
      const erroSenha = validarSenha(senha)
      if (erroSenha) {
        return res.status(400).json({ erro: erroSenha })
      }
      usuario.senha = await bcrypt.hash(senha, 12)
    }

    await usuario.save()

    res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email })
  } catch (erro) {
    console.error('Erro ao atualizar:', erro)
    res.status(500).json({ erro: 'Erro ao atualizar usuário' })
  }
}

// Deletar Usuários
export const deletar = async (req, res) => {
  try {
    const { id } = req.params
    const usuario = await User.findByPk(id)
    if (!usuario) {
      return res.status(404).json({ erro: 'Usuário não encontrado' })
    }
    await usuario.destroy()
    res.status(204).send()
  } catch (erro) {
    console.error('Erro ao deletar:', erro)
    res.status(500).json({ erro: 'Erro ao deletar usuário' })
  }
}
