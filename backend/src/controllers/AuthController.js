const AuthService = require("../services/AuthService")

module.exports = {
    create: (req, res) => {
        res.json(AuthService.createToken(1))
    }
}