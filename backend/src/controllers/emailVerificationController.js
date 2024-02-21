const { SignupService } = require("../services/SignupService")
const { ValidationUtil } = require("../utils/ValidationUtil")

module.exports = {

    create: async (req, res, next) => {
        const { title } = req.body;
        try {
            const filteredData = await ValidationUtil.validateSchema({
                body: req.body, 
                rules: {
                    email: 'required|email',
                    otp: 'required',
                },
               
            })
            const emailVerification = await SignupService.emailVerification(filteredData);
            emailVerification.statusCode = res.statusCode;
            return  res.json(emailVerification);
        } catch (e) {
            next(e);
        }
    },
   
 
}
