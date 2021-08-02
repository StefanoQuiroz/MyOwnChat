const WhatsApp = require('../models/whatsApp.model');

const findAll = (req, res) => {
    res.status(200).status("Hello Coding Dojo");
}

const createMessage = (req, res) => {
    WhatsApp.create(req.body, (err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(`New Message created: \n ${data}`);
        }
    })
}


module.exports = { findAll, createMessage };