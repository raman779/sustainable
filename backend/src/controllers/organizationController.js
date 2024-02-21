const { OrganizationService } = require("../services/OrganizationService")
const { ValidationUtil } = require("../utils/ValidationUtil")
const DBConfig = require('../config/database')


module.exports = {
    index: async (req, res) => { 
        const createdOrganization = await OrganizationService.getAllOrganization();
        console.log(createdOrganization)
        res.json(createdOrganization);
    },
    show: async (req, res) => {
        console.log("11")
       
    },
    create: async (req, res, next) => {
        const { name } = req.body;
        try {
            const filteredData = await ValidationUtil.validateSchema({
                body: req.body, 
                rules: {
                    name: 'required',
                    status: 'required',
                },
               
            })
            const createdOrganization = await OrganizationService.createOrganization(filteredData);
            return  res.json(createdOrganization);
        } catch (e) {
            next(e);
        }
    },
    // update: async (req, res) => 
    // {
    //     try {
    //         const usersid = req.params.usersid 
    //         const requestData = req.body;
    //         const updateUser =  await UserService.updateUser(usersid,requestData);
    //         return  res.json(updateUser);
    //     } catch (e) {
    //         next(e);
    //     }
        
    // },
    // delete: async (req, res) => {
    //     const usersid = req.params.usersid // fetch by db
    //     try {
    //         const usersid = req.params.usersid 
    //         const deleteUser =  await UserService.deleteUser(usersid);
    //         return  res.json(deleteUser);
    //     } catch (e) {
    //         next(e);
    //     }
    // }
}