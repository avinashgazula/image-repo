const express = require('express');
const router = express.Router();

router.route('/upload/').post(uploadImage);

module.exports = router;