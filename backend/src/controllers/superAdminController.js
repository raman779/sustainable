const { SuperAdminService } = require("../services/SuperAdminService")
const { ValidationUtil } = require("../utils/ValidationUtil")

module.exports = {
    index: (req, res) => { 
    
    },
    create: async (req, res, next) => {
        const { first_name, last_name, email,organization,password } = req.body;
        try {
            const filteredData = await ValidationUtil.validateSchema({
                body: req.body, 
                rules: {
                    first_name: 'required',
                    email: 'required|email',
                    singUpCode: 'required',
                    password:'required'
                },
               
            })
            if(req.body.singUpCode == process.env.singupCode){
                filteredData['role'] = 'SUPERADMIN'
                filteredData['status'] = 'ACTIVE'

            }
            console.log("filteredData",filteredData)
            const createdUser = await SuperAdminService.createSuperAdmin(filteredData);
            return  res.json(createdUser);
        } catch (e) {
            next(e);
        }
    },
    update: async (req, res) => 
    {
        try {
            const usersid = req.params.usersid 
            const requestData = req.body;
            const updateUser =  await UserService.updateUser(usersid,requestData);
            return  res.json(updateUser);
        } catch (e) {
            next(e);
        }
        
    },
    delete: async (req, res) => {
        const usersid = req.params.usersid // fetch by db
        try {
            const usersid = req.params.usersid 
            const deleteUser =  await UserService.deleteUser(usersid);
            return  res.json(deleteUser);
        } catch (e) {
            next(e);
        }
    }
}
