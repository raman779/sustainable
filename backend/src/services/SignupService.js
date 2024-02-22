const bcrypt = require('bcrypt');
const { ApiResponse } = require('../utils/ApiHelper')
const { sendEmail } = require('../utils/EmailSendHelper')
const { UnauthorizedError, ValidationError, AccessDeniedError, NotFoundError} =  require('../exceptions');


const moduleTable = 'users'
module.exports.SignupService = {
    getUserByEmail: async (code)=> {
        const updateUser =  await db(moduleTable).where({ invite_code:code }).where({ status:'INVITED' });
      if(!updateUser)
        throw new NotFoundError();
    if(updateUser)
    return updateUser
    },
    createUser: async (data) => {
            const existUser = await db(moduleTable).where('email', data.email).where('status', 'ACTIVE').first();   
            if(existUser)
               return ApiResponse('success',existUser);
            else
            {
                const [createdUserId] = await db(moduleTable).insert({
                    first_name: data.first_name,
                    last_name: data.last_name, 
                    mobile_number: data.mobile_number,  
                    email: data.email,
                    user_type:data.user_type
                });
                if (createdUserId) {
                    const createdUser = await db(moduleTable).where('id', createdUserId).first();
                        // Email Verification OTP send
                        const recipientEmail = data.email;
                        const emailSubject = 'Email Verification mail';
                        const emailText = 'Hello, Your Email Verification code is 1234';
                        sendEmail(recipientEmail, emailSubject, emailText)
                        .then(info => {
                            console.log('Email sent:', info.response);
                        })
                        .catch(error => {
                            console.error('Error sending email:', error);
                        });
                    return ApiResponse('success',createdUser);
                } 
                else
                return ApiResponse('fail');
            }
       
    },    
    updateUser: async (code,data) => {
        if(data['password']){
            console.log(data['password'])
            console.log(hashPassword(data['password']))
            data['password'] =await hashPassword(data['password'])
        }
            const updateUser =  await db(moduleTable).where({ invite_code:code }).update(data);
            if(!updateUser)
            throw new NotFoundError();
        else{
            return ApiResponse('success',updateUser);
        }
     
    },
    deleteUser: async (usersid) => {
     
            const deleteUser =  await db(moduleTable).where({ id:usersid }).del();
            if(deleteUser)
            return ApiResponse('success');
            else
            return ApiResponse('fail');
       
    },
    emailVerification: async (data) => {
       
            const existUser = await db(moduleTable).where('email', data.email).first();
            if(existUser)
            {
              // will do OTP dynamic latter  
              if(data.otp==1234)
              {
                const updateUser =  await db(moduleTable).where({ email:data.email}).update({email_verified:1});
                return ApiResponse('success');
              }
               else
                return ApiResponse('fail');
            }
            else
            return ApiResponse('fail');
       
    },
    updatePassword: async (userId,data) => {
      
            const existUser = await db(moduleTable).where('id',userId).first();
            if(existUser)
            {
                if(data.password===data.confirmpassword)
                {
                    const hashedPassword = await hashPassword(data.password);
                    const updateUser =  await db(moduleTable).where({ id:userId}).update({password:hashedPassword});
                    if(updateUser)
                        return ApiResponse('success');
                    else
                        return ApiResponse('false');
                }
                else
                return ApiResponse('fail');
            }
            else
            return ApiResponse('fail');
       
    },
    updateProfile: async (userId,data) => {
      
            const existUser = await db(moduleTable).where('id',userId).first();
            if(existUser)
            {
                const updatedData = {
                    email2:data.otheremail,
                    display_name:data.displayName,
                    address:data.address,
                    country:data.country,
                    state:data.state,
                    city:data.city,
                    zipcode:data.zipcode,
                    profile_image:data.profileImage
                }
                const updateUser =  await db(moduleTable).where({ id:userId}).update(updatedData);
                if(updateUser)
                return ApiResponse('success');
                else
                return ApiResponse('false'); 
            }
            else
            return ApiResponse('false'); 
       
    },
    login: async (data) => {
       
            const hashedPassword = await hashPassword(data.password);
            const whereData = {
                email:data.email
            }
            const existUser = await db(moduleTable).select("id","email","password","user_role","first_name","last_name").where(whereData).first();
            if(existUser)
            {
                const match = await bcrypt.compare(data.password, existUser.password);
                if(match)
                return ApiResponse('success',existUser);
                else
                return ApiResponse('false');
               
            }
            else
            return ApiResponse('fail');
        
    },
}
const hashPassword = async (password) => {
    const saltRounds = 10; 
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  };
