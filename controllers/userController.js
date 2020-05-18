const Users = require('../models/Users')
const formidable = require('formidable')

exports.addUser = async (req, res, next) => {
    console.log("addUser");
    
    try {
        var form = await formidable.IncomingForm();
        form.parse(req, (err, fields, files) => {
            if (err) {
                console.error(`formidable error is ${err}`)
                return;
            }
            console.log(fields)
            Users.create(fields)
                .then(data => {
                    return res.status(201).json({
                        success: true,
                        session_id: data._id
                    })
                })
                .catch(err => {
                    res.status(501).json({
                        success: false,
                        error: "An account with the email already exists"
                    });
                })
            
            
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error
        });
    }
}