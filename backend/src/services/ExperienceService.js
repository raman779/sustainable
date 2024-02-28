const bcrypt = require('bcrypt');
const { ApiResponse } = require('../utils/ApiHelper')
const moduleTable = 'users_experience'
module.exports.ExperienceService = {
    addExperience: async (data) => {
        
                const [createdAddressId] = await db(moduleTable).insert(data);
                if (createdAddressId) {
                    const createdAddress = await db(moduleTable).where('id', createdAddressId).first();
                    return ApiResponse('success','ok',false,createdAddress);
                } 
                else {
                    return ApiResponse('false','ok',false,{});
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