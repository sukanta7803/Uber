const userModel = require('../models/userModel')

module.exports.createUser = async ({
    fullname, email, password  // Accept fullname object directly
}) => {
    if (!fullname || !fullname.firstname || !email || !password) {
        throw new Error('All required fields are missing');
    }
    
    const user = await userModel.create({
        fullname: {
            firstname: fullname.firstname,
            lastname: fullname.lastname || ''  // Handle optional lastname
        },
        email,
        password
    })
    return user;
}