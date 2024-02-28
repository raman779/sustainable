const { ExperienceService } = require("../services/ExperienceService")
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
                    attended_live_workshop : 'required',
                    attended_virtual_workshop : 'required',
                    attended_no_of_the_above : 'required',
                    read_how_to_make_disciples : 'required',
                    read_well_made_well_done : 'required',
                    read_none_of_the_above : 'required',
                    coached : 'required',
                    coaching : 'required',
                    finished_D1 : 'required',
                    finished_D2 : 'required',
                    finished_D3 : 'required',
                    'finished_N/A' : 'required',
                    lead_D1 : 'required',
                    lead_D2 : 'required',
                    lead_D3 : 'required',
                    'lead_N/A' : 'required'
                },
            })
            filteredData = {...filteredData,user_id : userId}
            console.log("filteredData", filteredData)
            const createdUser = await ExperienceService.addExperience(filteredData);
            return res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },

}
