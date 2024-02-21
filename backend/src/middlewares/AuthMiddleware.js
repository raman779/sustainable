const { UnauthorizedError } = require('../exceptions')
const AuthService = require('../services/AuthService')

module.exports  = {
    verify: (req, res, next) => {
        const authorization = (req.headers['authorization'] || '').split(' ')
        const user = AuthService.verifyToken(authorization.length > 0 ? authorization[0] : '')
        if (user) {
            req.auth = user
            next()
        }else{
            throw new UnauthorizedError()
        }
    }
}