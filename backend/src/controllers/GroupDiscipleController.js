const { GroupDiscipleService } = require("../services/groupDiscipleService")
const { ValidationUtil } = require("../utils/ValidationUtil")

module.exports = {
    index: (req, res) => {

    },
    create: async (req, res, next) => {
        try {
            console.log("10 groupDis")
            let userId, userRole
            await req.auth.then(user => {
                userId = user.userId
                userRole = user.role
            })
            let filteredData = await ValidationUtil.validateSchema({
                body: req.body,
                rules: {
                    first_name: 'required',
                    email: 'required|email',
                    group_id: 'required'
                },
            })
            console.log("filter")
            const createdUser = await GroupDiscipleService.addDisciple(filteredData);
            return res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },

}
