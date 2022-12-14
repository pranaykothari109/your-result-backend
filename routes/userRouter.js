const express = require('express');
const userModule = require('../controllers/userModule');
const router = express.Router();
const auth = require('../middlewares/auth');

// Routes
router.post('/signup', userModule.signup);
router.post('/login', userModule.login);
router.patch('/update/:id', userModule.updateUser);

router.post('/is-admin', auth.authenticateToken, userModule.isAdmin);
router.get('/', auth.authenticateToken, auth.authorizeUser, userModule.getAllUsers, userModule.getUsers );
router.get('/users-list', auth.authenticateToken, auth.authorizeUser, userModule.getAllUsers);

router.post('/get-data', auth.authenticateToken, userModule.getData )

module.exports = router;