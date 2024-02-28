module.exports = {
    JWT_SECRET: process.env.JWT_SECRET || '',
    JWT_ALGO: process.env.JWT_ALGO || 'HS256',
    JWT_AUDIENCE: 'sustainablediscipleship',
    JWT_ISSUER: 'sustainablediscipleship'
}