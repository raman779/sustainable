const bcrypt = require('bcrypt');
const { ApiResponse } = require('../utils/ApiHelper')
const moduleTable = 'groups'
module.exports.GroupService = {
    createGroup: async (data) => {
        
                const [createdAddressId] = await db(moduleTable).insert(data);
                console.log(createdAddressId)
                const dataForGroupLeaders = {
                    organization_id:data.organization_id,
                    user_id:data.created_by,
                    group_id:createdAddressId
                }
                await db('group_leaders').insert(dataForGroupLeaders);
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