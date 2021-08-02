const WhatsApp = require('../models/whatsApp.model');

const prove = (req, res) => {
    res.status(200).send("Good Job!!");
}

const findAll =  (req, res) => {
    WhatsApp.find()
        .then(response => {
            res.json({data: response});
            res.status(200);
        })
        .catch(err => {
            res.json({error: err});
            res.status(500);
        })
    /* WhatsApp.find((err, data) => {
        if(err){
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    }) */
}

const createMessage = (req, res) => {
    WhatsApp.create(req.body)
        .then(response => {
            res.json({data: response});
            res.status(200);
        })
        .catch(err => {
            res.json({error: err});
            res.status(500);
        })
    /* WhatsApp.create(req.body, (err, data) => {
        if(err){
            res.status(500).send(err);
        }
        else{
            res.status(201).send(`New Message created: \n ${data}`);
        }
    }) */
}


module.exports = { prove, findAll, createMessage };