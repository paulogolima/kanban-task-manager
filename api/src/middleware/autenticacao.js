import jwt from 'jsonwebtoken'

export const autenticar = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1]

    if (!token) {
      return res.status(401).json({ erro: 'Token não fornecido' })
    }

    // Validar se JWT_SECRET existe
    if (!process.env.JWT_SECRET) {
      console.error('JWT_SECRET não definido!')
      return res.status(500).json({ erro: 'Erro de configuração' })
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (erro) {
    if (erro.name === 'TokenExpiredError') {
      return res.status(401).json({ erro: 'Token expirado' })
    }
    res.status(401).json({ erro: 'Token inválido' })
  }
}
