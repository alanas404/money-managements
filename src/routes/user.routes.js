const express = require('express');
const router = express.Router();

const userController = require('../controllers/user.controller');
const authMiddleware = require('../middlewares/auth.middleware');


router.get('/', authMiddleware, userController.index);
router.post('/', userController.store);


module.exports = router;