import { Sequelize } from 'sequelize'

export default async function () {
    const env = process.env.NODE_ENV || 'development'
    const configDb = config[env]

    const sequelize = new Sequelize(
        configDb.database,
        configDb.username,
        configDb.password,
        configDb
    )

    try {
        await sequelize.authenticate()
        console.log(`Conexão com banco realizada com sucesso!`)
    } catch (err){
        console.log(`Erro ao conectar com banco: ${err}`)
    }

    return sequelize
}