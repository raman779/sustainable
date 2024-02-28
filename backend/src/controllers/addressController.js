const { AddressService } = require("../services/AddressService")
const { ValidationUtil } = require("../utils/ValidationUtil")

module.exports = {
    index: (req, res) => {

    },
    create: async (req, res, next) => {
        try {
            console.log("10")
            let userId, userRole
            await req.auth.then(user => {
                userId = user.userId
                userRole = user.role
            })
            let filteredData = await ValidationUtil.validateSchema({
                body: req.body,
                rules: {
                    zipcode: 'required',
                    city: 'required',
                    state: 'required',
                    country: 'required',
                },
            })
            filteredData = {...filteredData,user_id : userId}
            console.log("filteredData", filteredData)
            const createdUser = await AddressService.createAddress(filteredData);
            return res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },

}
