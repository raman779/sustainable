const { GroupService } = require("../services/groupService")
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
                    name: 'required',
                    organization_id: 'required',
                    gender: 'required',
                },
            })
            filteredData = {...filteredData,created_by : userId}
            console.log("filteredData", filteredData)
            const createdUser = await GroupService.createGroup(filteredData);
            return res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },

}
