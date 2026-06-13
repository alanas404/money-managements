const transactionService = require('../services/transaction.service');


class TransactionController {
    async store(req, res) {
        try {
            const { type, amount, description } = req.body;
            const userId = req.user.id;
            const transaction = await transactionService.createTransaction(userId, type, amount, description);
            res.status(201).json({
                message: 'Saved successfully',
                id: transaction.insertId
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async update(req,res){
        try{
            const { id } = req.params;
            const {type,amount,description} = req.body;
            const userId = req.user.id;
            await transactionService.updateTransaction(id, userId, type, amount, description);
            res.status(200).json({
                message: 'Updated successfully'
            });
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
}

module.exports = new TransactionController();