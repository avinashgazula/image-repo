const Image = require('../models/Image')
const mongoose = require('mongoose')
var formidable = require('formidable')
var fs = require('fs')

var obj1 = {}

// @route GET /api/images
exports.getImages = (req, res, next) => {
    try {
        const images = Image.find();
        console.log(images);
        
        // return res.status(200).json({
        //     success: true,
        //     count: images.length,
        //     data: images
        // })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            error: error
        });
    }
}


// @route POST /api/images
exports.uploadImage = async (req, res, next) => {

    
    var form = await formidable.IncomingForm();
    
    form.parse(req, (err, fields, files) => {
        if (err) {
            console.error(`formidable error is ${err}`)
            return;
        }
        
        var obj = { ...fields, ...files }

        
        // console.log("path is", files.file.path)
        var path = files.file.path

        fs.readFile(path, function read(err, data) {
            if (err) {
                throw err;
            }
            const content = data;
            obj["img"] = content;
            delete obj["file"]

            
            const image = Image.create(obj).then(() => {
                console.log(`Upload successful`.green.italic)
                return res.status(201).json({
                    success: true,
                    image: image
                })
            }, () => {
                    console.log(`Upload failed`.red.italic)
                    return res.status(400).json({
                        success: false,
                        error: error
                    })
            });
        });


    })
   
    
    
}

exports.get = async (req, res, next) => {

}