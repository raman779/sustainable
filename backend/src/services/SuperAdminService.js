const bcrypt = require('bcrypt');
const { ApiResponse } = require('../utils/ApiHelper')
const moduleTable = 'users'
const saltRounds = 10;
module.exports.SuperAdminService = {
    createSuperAdmin: async (data) => {
       
            const existUser = await db(moduleTable).where('email', data.email).first();
            if(existUser)
            {
                return ApiResponse('success','ok',true,existUser);
            }
            else
            {       
                console.log("15",data)
                let insertData = {}
                    const hashedPassword = await hashPassword(data.password);
                    insertData = {
                        first_name: data.first_name,
                        last_name: data.last_name,
                        organization_id: data.organization_id, 
                        email: data.email,
                        password: hashedPassword,
                        user_role: data.role,
                        status: data.status
                    }
                const [createdUserId] = await db(moduleTable).insert(insertData);
                if (createdUserId) {
                    const createdUser = await db(moduleTable).where('id', createdUserId).first();
                    return createdUser;
                } 
                else {
                    return ApiResponse('false','ok',false,{});
                }

            }
       
    },    
}
const hashPassword = async (password) => {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };
