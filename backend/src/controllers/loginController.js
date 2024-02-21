const { SignupService } = require("../services/SignupService")
const { ValidationUtil } = require("../utils/ValidationUtil")
const AuthService = require("../services/AuthService")

module.exports = {

    create: async (req, res, next) => {
        console.log("8")
        const { title } = req.body;
        try {
            const filteredData = await ValidationUtil.validateSchema({
                body: req.body, 
                rules: {
                    email: 'required|email',
                    password: 'required'
                },
            })
            const login = await SignupService.login(filteredData);
            login.statusCode = res.statusCode;
            const userId = login.data.id;
            const authToken = AuthService.createToken(userId);
            login.authToken = authToken;
            return  res.json(login);
        } catch (e) {
            next(e);
        }
    
    },
 
}
