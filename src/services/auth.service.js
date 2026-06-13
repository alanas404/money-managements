const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userRepository = require('../repositories/user.repository');

class AuthService {
    async register(data) {
        const { name, email, password } = data;

        const existingUser = await userRepository.findUserByEmail(email);
        if (existingUser) {
            throw new Error('User with this email already exists');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        return userRepository.createUser(name, email, hashedPassword);

    }

    async login(data) {
        const { email, password } = data;

        const user = await userRepository.findUserByEmail(email);
        if (!user) {
            throw new Error('Invalid email or password');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new Error('Invalid email or password');
        }

        return this.generateToken(user);
    }

    generateToken(user) {
        return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    }
}

module.exports = new AuthService();