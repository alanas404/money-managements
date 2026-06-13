const db = require('../config/db');

class TransactionRepository {
    async createTransaction(userId, type, amount, description = null) {
        console.log(userId, type, amount, description);
        const [result] = await db.execute('INSERT INTO transactions (user_id, type, amount, description) VALUES (?, ?, ?, ?)', [userId, type, amount, description]);
        return result;
    }

    async findById(id) {
        const [rows] = await db.execute('SELECT * FROM transactions WHERE id = ?', [id]);
        return rows[0];
    }

    async updateTransaction(id, type, amount, description) {
        const [result] = await db.execute('UPDATE transactions SET type = ?, amount = ?, description = ? WHERE id = ?', [type, amount, description, id]);
        return result;
    }
}

module.exports = new TransactionRepository();