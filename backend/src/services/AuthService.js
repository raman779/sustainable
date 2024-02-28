const jwt = require('jsonwebtoken')
const jwtconfig = require('../config/jwtconfig')
const moduleTable = 'users'
const AuthService = {
    createToken: (userId) => {
        const payload = {
            // add additional payload when needed using db query
            userId,
        }
        return jwt.sign(payload, jwtconfig.JWT_SECRET, {
            algorithm: 'HS256',
            audience: jwtconfig.JWT_AUDIENCE,
            issuer: jwtconfig.JWT_ISSUER
        })
    },
    verifyToken: async (token) => {
        if (!token){
            return null
        }
        try {
            let authToken = jwt.verify(token, jwtconfig.JWT_SECRET, {
                algorithm: 'HS256',
                audience: jwtconfig.JWT_AUDIENCE,
                issuer: jwtconfig.JWT_ISSUER
            })
            console.log("26",authToken)
            let userId = authToken.userId
            console.log("@7",userId)
            // await authToken.then(user=>{
            //        console.log('13',user.userId)
            //        userId = user.userId
            //    })
               const whereData = {
                id:userId
            }
            console.log("whereData",whereData)
            const existUser = await db(moduleTable).select("id","user_role").where(whereData).first();
            console.log(existUser)
            authToken = {...authToken,role : existUser.user_role}
            return authToken
        } catch (e) {
            console.error(e)
            return null
        }
    }
}

module.exports = AuthService