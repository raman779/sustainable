const bcrypt = require('bcrypt');
const { ApiResponse } = require('../utils/ApiHelper')
const moduleTable = 'groups_disciples'
module.exports.GroupDiscipleService = {
    addDisciple: async (data) => {
        console.log("66666")
        const dataForUsers = {
           first_name : data.first_name,
           last_name : data.last_name?data.last_name:'',
           email: data.email,
           mobile_number: data.mobile_number?data.mobile_number:''
        }
        console.log("dataForUsers",dataForUsers)
                const [createdUserId]= await db('users').insert(dataForUsers)
                if(createdUserId){
                    const dataForGroupDisciple = {
                        user_id:createdUserId,
                        group_id:1
                    }
                    const [createdDiscipleId] = await db(moduleTable).insert(dataForGroupDisciple);
                    if (createdDiscipleId) {
                        const createdDisciple = await db(moduleTable).where('id', createdDiscipleId).first();
                        return ApiResponse('success','ok',false,createdDisciple);
                    } 
                    else {
                        return ApiResponse('false','ok',false,{});
                    }
                }else{
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