const express = require('express');
const { loginUser , register } = require('../controllers/authController');

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', register); // Admin registration route
module.exports = router;
