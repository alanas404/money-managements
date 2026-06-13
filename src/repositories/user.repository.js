const db = require('../config/db');

class UserRepository {
    async createUser(name, email,password) {
        const [result] = await db.execute('INSERT INTO users (name,email,password) VALUES (?,?,?)', [name, email, password]);

        return result.insertId;
    }
    async findUserByEmail(email){
        const [rows] = await db.execute('SELECT * FROM users WHERE email = ?',[email]);
        return rows[0];
    }
}

module.exports = new UserRepository();