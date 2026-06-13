const userService = require('../services/user.service');

class UserController {
    async store(req, res) {
        console.log(req.body);
        try {
            const id = await userService.createUser(req.body);
            console.log(id);
            res.status(201).json({
                message: 'User created successfully',
                userId: id
            });
        }
        catch (error) {
            res.status(400).json({
                message: error.message
            });
        }

    }

    async index(req, res) {
        console.log(req.user);
        res.status(200).json({
            user: req.user
        });
    }
}

module.exports = new UserController();