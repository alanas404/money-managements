const userRepository = require('../repositories/user.repository');


class UserService{
    createUser(data){
        const {name,email,password} = data;
        if(!name || !email || !password){
            throw new Error('Name, email, and password are required'); 
        } 
        return userRepository.createUser(name,email,password);
    }
}

module.exports = new UserService();