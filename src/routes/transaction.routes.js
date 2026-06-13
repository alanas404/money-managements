const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.use(authMiddleware);
router.post("/",transactionController.store);
router.put("/:id",transactionController.update);    

module.exports = router;