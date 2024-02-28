const { SignupService } = require("../services/SignupService")
const { ValidationUtil } = require("../utils/ValidationUtil")

module.exports = {
    show: async (req, res) => {
       
        try {
            console.log(req.params) 
            const getInvitedUser = await SignupService.getUserByEmail(req.params.signupid)
            return res.send(getInvitedUser)
        } catch (e) {
            //next(e);
        }
    },

    create: async (req, res, next) => {
        const { title } = req.body;
        try {
            const filteredData = await ValidationUtil.validateSchema({
                body: req.body, 
                rules: {
                    first_name: 'required',
                    email: 'required|email',
                    password: 'required'
                },
               
            })
            if(req.body.last_name){
                filteredData['last_name']= req.body.last_name
            }
            const createdUser = await SignupService.createUser(filteredData);
            createdUser.statusCode = res.statusCode;
            return  res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },
    update: async (req, res,next) => 
    {
        try {
            console.log("update invited user")
            const invite_code = req.params.signupid 
            let requestData = req.body;
            requestData = {...requestData,status:"ACTIVE"}
            console.log("invite_code",invite_code)
            console.log("requestData",requestData)
            const updateUser =  await SignupService.updateUser(invite_code,requestData);
            return  res.json(updateUser);
        } catch (e) {
            next(e);
        }
        
    },
    delete: async (req, res) => {
        const usersid = req.params.usersid // fetch by db
        try {
            const usersid = req.params.usersid 
            const deleteUser =  await SignupService.deleteUser(usersid);
            deleteUser.statusCode = res.statusCode;
            return  res.json(deleteUser);
        } catch (e) {
            next(e);
        }
    }
}
