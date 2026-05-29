import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import db from '../models/index.js'

const User = db.User

export const registrar = async (req, res) => {
  try {
    const { nome, email, senha } = req.body
    
    // Validar campos obrigatórios
    if (!nome || !email || !senha) {
      return res.status(400).json({ erro: 'Campos obrigatórios: nome, email, senha' })
    }

    // Verificar se email já existe
    const usuarioExistente = await User.findOne({ where: { email } })
    if (usuarioExistente) {
      return res.status(409).json({ erro: 'Email já cadastrado' })
    }

    // Criar hash da senha
    const hash = await bcrypt.hash(senha, 10)
    
    // Criar usuário
    const user = await User.create({ nome, email, senha: hash })

    res.status(201).json({ 
      id: user.id, 
      nome: user.nome, 
      email: user.email, 
      mensagem: 'Usuário registrado com sucesso. Faça login para obter o token.' 
    })
  } catch (erro) {
    console.error('Erro ao registrar:', erro)
    res.status(500).json({ erro: erro.message || 'Erro ao registrar usuário' })
  }
}

export const login = async (req, res) => {
  try {
    const { email, senha } = req.body
    
    // Validar campos obrigatórios
    if (!email || !senha) {
      return res.status(400).json({ erro: 'Email e senha são obrigatórios' })
    }
    
    // Buscar usuário por email
    const user = await User.findOne({ where: { email } })
    if (!user) {
      return res.status(401).json({ erro: 'Email ou senha inválidos' })
    }
    
    // Comparar senha
    const senhaValida = await bcrypt.compare(senha, user.senha)
    if (!senhaValida) {
      return res.status(401).json({ erro: 'Email ou senha inválidos' })
    }
    
    // Gerar token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '24h' })
    
    res.json({ 
      id: user.id, 
      nome: user.nome, 
      email: user.email, 
      token 
    })
  } catch (erro) {
    console.error('Erro ao fazer login:', erro)
    res.status(500).json({ erro: erro.message || 'Erro ao fazer login' })
  }
}

export const listar = async (req, res) => {
  try {
    const users = await User.findAll({ 
      attributes: ['id', 'nome', 'email', 'createdAt', 'updatedAt'] 
    })
    res.json(users)
  } catch (erro) {
    console.error('Erro ao listar usuários:', erro)
    res.status(500).json({ erro: erro.message || 'Erro ao listar usuários' })
  }
}

export const obter = async (req, res) => {
  try {
    const { id } = req.params
    
    const user = await User.findByPk(id, {
      attributes: ['id', 'nome', 'email', 'createdAt', 'updatedAt'],
      include: [{ 
        model: db.Quadro, 
        attributes: ['id', 'titulo'],
        include: [{ 
          model: db.Coluna,
          attributes: ['id', 'titulo']
        }] 
      }]
    })
    
    if (!user) {
      return res.status(404).json({ erro: 'Usuário não encontrado' })
    }
    
    res.json(user)
  } catch (erro) {
    console.error('Erro ao obter usuário:', erro)
    res.status(500).json({ erro: erro.message || 'Erro ao obter usuário' })
  }
}

export const atualizar = async (req, res) => {
  try {
    const { id } = req.params
    const { nome, email, senha } = req.body
    
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ erro: 'Usuário não encontrado' })
    }
    
    // Se email está sendo alterado, verificar se já existe
    if (email && email !== user.email) {
      const usuarioExistente = await User.findOne({ where: { email } })
      if (usuarioExistente) {
        return res.status(409).json({ erro: 'Email já cadastrado' })
      }
    }
    
    // Atualizar campos
    if (nome) user.nome = nome
    if (email) user.email = email
    if (senha) user.senha = await bcrypt.hash(senha, 10)
    
    await user.save()
    
    res.json({ 
      id: user.id, 
      nome: user.nome, 
      email: user.email,
      mensagem: 'Usuário atualizado com sucesso'
    })
  } catch (erro) {
    console.error('Erro ao atualizar usuário:', erro)
    res.status(500).json({ erro: erro.message || 'Erro ao atualizar usuário' })
  }
}

export const deletar = async (req, res) => {
  try {
    const { id } = req.params
    
    const user = await User.findByPk(id)
    if (!user) {
      return res.status(404).json({ erro: 'Usuário não encontrado' })
    }
    
    await user.destroy()
    
    res.json({ mensagem: 'Usuário deletado com sucesso' })
  } catch (erro) {
    console.error('Erro ao deletar usuário:', erro)
    res.status(500).json({ erro: erro.message || 'Erro ao deletar usuário' })
  }
}
