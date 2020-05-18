const Image = require('../models/Image')
const mongoose = require('mongoose')
var formidable = require('formidable')
var fs = require('fs')

var obj1 = {}

let readFileAsync = function (filename) {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, (err, buffer) => {
            if (err) reject(err); else resolve(buffer);
        });
    });
};

// @route GET /api/images
exports.getImages = async (req, res, next) => {
    try {
        const images = await Image.find();
        // console.log(images[0].img[4]);
        
        return res.status(200).json({
            success: true,
            count: images.length,
            data: images
        })

        
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

    try {
        var form = await formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error(`formidable error is ${err}`)
                return;
            }

            // console.log("fields", fields)
            // console.log("files", files);

            var count = Number(fields.count)

            var images = []
            var promises = []

            for (let i = 0; i < count; i++) {
                var obj = {}
                obj['user'] = fields[`user[${i}]`]
                obj['filename'] = fields[`filename[${i}]`]
                var path = files[`file[${i}]`].path
                images.push(obj)
                promises.push(readFileAsync(path))

                // fs.readFile(path,async function read(err, data) {
                //     if (err) {
                //         throw err;
                //     }
                //     const content = data;
                //     obj["img"] = content;

                //     const image = await Image.create(obj)
                //     images.push(image)
                    
                // });
                
            }

            Promise.all(promises).then(values => {
                for (var i = 0; i < values.length; i++){
                    images[i]["img"] = values[i]
                }
                Image.insertMany(images).then((docs) => {
                    return res.status(201).json({
                        success: true,
                        images: docs
                    })
                })
            })

            

            // setTimeout(() => {
            //     console.log("images", images)

            //     return res.status(201).json({
            //         success: true,
            //         images: images
            //     })
            // }, 2000);

            
            
            
            
            
            

            // var obj = { ...fields, ...files }
            // var path = files.file.path

            // fs.readFile(path, async function read(err, data) {
            //     if (err) {
            //         throw err;
            //     }
            //     const content = data;
            //     obj["img"] = content;
            //     delete obj["file"]


            //     const image = await Image.create(obj)
            //     return res.status(201).json({
            //         success: true,
            //         image: image
            //     })
            // });

        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        });
    }
    

    
}


// @route DELETE /api/images/:id
exports.deleteImage = async (req, res, next) => {
 
    const image = Image.findById(req.params.id)
    if (!image) {
        return res.status(500).json({
            success: false,
            error: 'No image found'
        })
    }

    await image.remove();
    return res.status(200).json({
        success: true,
        data: {}
    })
}