const bcrypt = require('bcrypt');
const { ApiResponse } = require('../utils/ApiHelper')
const moduleTable = 'organizations'
const saltRounds = 10;
module.exports.OrganizationService = {
    getAllOrganization:async()=>{
        const allOrganization = await db(moduleTable).where('status', 'ACTIVE');
        return allOrganization
    },
    createOrganization: async (data) => {
        console.log("1212")
            const existUser = await db(moduleTable).where('name', data.name).first();
            if(existUser)
            {
                return ApiResponse('success','ok',true,existUser);
            }
            else
            {
                console.log("19")
                const [createdOrganizationId] = await db(moduleTable).insert({
                    name: data.name
                });
                if (createdOrganizationId) {
                    const createdOrganization = await db(moduleTable).where('id', createdOrganizationId).first();
                    return ApiResponse('success','ok',false,createdOrganization);
                } 
                else {
                    return ApiResponse('false','ok',false,{});
                }

            }
       
    },    
    // updateUser: async (usersid,data) => {
       
    //         const updateUser =  await db(moduleTable).where({ id:usersid }).update(data);
    //         if(updateUser)
    //         {
    //             return ApiResponse('success','User updated successfully');
    //         }
    //         else
    //         {
    //             return ApiResponse('false','Error updating user');
    //         }
       
    // },
    // deleteUser: async (usersid) => {
       
    //         const deleteUser =  await db(moduleTable).where({ id:usersid }).del();
    //         if(deleteUser)
    //         {
    //             return ApiResponse('success','User deleted successfully.');
    //         }
    //         else
    //         {
    //             return ApiResponse('success','Error deleting user');
    //         }
       
    // },
}