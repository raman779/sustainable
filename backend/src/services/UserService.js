const bcrypt = require('bcrypt');
const { ApiResponse } = require('../utils/ApiHelper')
const uuid = require('uuid')
const crypto = require('crypto')
const moduleTable = 'users'
const { sendEmail } = require('../utils/EmailSendHelper')
const saltRounds = 10;
module.exports.UserService = {
    createUser: async (data) => {
       
            const existUser = await db(moduleTable).where('email', data.email).first();
            if(existUser)
            {
                return ApiResponse('success','ok',true,existUser);
            }
            else
            {   
                const invite_code = generateInviteCode()
                let insertData = {}
                    insertData = {
                        first_name: data.first_name,
                        last_name: data.last_name,
                        organization_id: data.organization_id, 
                        email: data.email,
                        user_role: data.user_role,
                        status: data.status,
                        invite_code:invite_code
                    }
                const [createdUserId] = await db(moduleTable).insert(insertData);
                if (createdUserId) {
                    const createdUser = await db(moduleTable).where('id', createdUserId).first();
                    const recipientEmail = data.email;
                    const emailSubject = 'Email Verification mail';
                    const emailText = `Hello, you have been invited as ${insertData.user_role} in SD. Please use the below link for joining ${process.env.baseURL/invite_code}`;
                    sendEmail(recipientEmail, emailSubject, emailText)
                        .then(info => {
                            console.log('Email sent:', info.response);
                        })
                        .catch(error => {
                            console.error('Error sending email:', error);
                        });

                    return createdUser;
                } 
                else {
                    return ApiResponse('false','ok',false,{});
                }

            }
       
    },    
    updateUser: async (usersid,data) => {
       
            const updateUser =  await db(moduleTable).where({ id:usersid }).update(data);
            if(updateUser)
            {
                return ApiResponse('success','User updated successfully');
            }
            else
            {
                return ApiResponse('false','Error updating user');
            }
       
    },
    deleteUser: async (usersid) => {
       
            const deleteUser =  await db(moduleTable).where({ id:usersid }).del();
            if(deleteUser)
            {
                return ApiResponse('success','User deleted successfully.');
            }
            else
            {
                return ApiResponse('success','Error deleting user');
            }
       
    },
}
const hashPassword = async (password) => {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };
  const generateInviteCode = function () {
	const inviteCode = uuid.v4()
	const hash = crypto.createHmac('sha256', inviteCode)
		.digest('hex')
	return hash
}
