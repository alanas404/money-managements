const transactionRepository = require('../repositories/transaction.repository');

class TransactionService {
    async createTransaction(userId, type, amount, description) {

        if (!type) {
            throw new Error('Type is required');
        }
        if (!amount) {
            throw new Error('Amount is required');
        }
        const result = await transactionRepository.createTransaction(userId, type, amount, description);
        return result;
    }


    async updateTransaction(id, userId, type, amount, description) {
        const trasaction = await transactionRepository.findById(id);

        if(!trasaction) {
            throw new Error('Transaction not found');
        }

        if(trasaction.user_id !== userId) {
            throw new Error('Unauthorized');
        }

        const result = await transactionRepository.updateTransaction(id, type ?? trasaction.type, amount ?? trasaction.amount, description ?? trasaction.description);
        return result;
    }
}

module.exports = new TransactionService();