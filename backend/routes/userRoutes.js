const router = require('express').Router();
const { register, login, profile } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, profile);

module.exports = router;
