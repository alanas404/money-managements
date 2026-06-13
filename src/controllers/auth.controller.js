const authService = require('../services/auth.service');
class AuthController {
    async register(req, res) {
        try {
            const id = await authService.register(req.body);
            res.status(201).json({ message: 'Registration successful', id });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req,res){
        try{
            const token = await authService.login(req.body);
            res.json({ message: 'Login successful', token });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new AuthController();