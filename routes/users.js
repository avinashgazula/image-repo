const express = require('express');
const router = express.Router();

var cors = require('cors');
router.use(cors());

const { addUser } = require('../controllers/userController')

router.route('/').post(addUser);

module.exports = router;