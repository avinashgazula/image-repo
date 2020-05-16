const express = require('express');
const router = express.Router();

var cors = require('cors');
router.use(cors());

const { getImages, uploadImage, deleteImage } = require('../controllers/imageController.js');

router.route('/')
    .get(getImages)
    .post(uploadImage);

router.route('/:id')
    .delete(deleteImage)

module.exports = router;