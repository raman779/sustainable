const { UserService } = require("../services/UserService")
const { ValidationUtil } = require("../utils/ValidationUtil")

module.exports = {
    index: (req, res) => { 
    
    },
    create: async (req, res, next) => {
        const { first_name, last_name, email,organization_ids } = req.body;
        try {
            let userId,userRole
         await req.auth.then(user=>{
                console.log('13',user.userId)
                userId = user.userId
                userRole = user.role
                console.log("DFSjhfd",user)
            })
            console.log("userRole",userRole)
            const filteredData = await ValidationUtil.validateSchema({
                body: req.body, 
                rules: {
                    first_name: 'required',
                    email: 'required|email',
                    organization_ids:'required'
                },
               
            })
            if(userRole == 'SUPERADMIN'){
                filteredData['user_role'] = 'ADMIN'
                filteredData['status'] = 'INVITED'
            }
            else if(userRole === 'ADMIN'){
                filteredData['user_role'] = 'LEADER'
                filteredData['status'] = 'INVITED'
            }
            else if(userRole === 'LEADER'){
                filteredData['user_role'] = 'DISCIPLE'
                filteredData['status'] = 'ACTIVE'
            }
            console.log("filteredData",filteredData)
            const createdUser = await UserService.createUser(filteredData);
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
