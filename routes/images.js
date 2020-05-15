const express = require('express');
const router = express.Router();

var cors = require('cors');
router.use(cors());

const { getImages, uploadImage } = require('../controllers/imageController.js');

router.route('/')
    .get(getImages)
    .post(uploadImage);

module.exports = router;