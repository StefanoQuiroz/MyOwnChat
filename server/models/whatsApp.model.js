const mongoose = require('mongoose');

const WhatsAppSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,

}, {timestamps: true});

const WhatsApp = mongoose.model("Messages", WhatsAppSchema);

module.exports = WhatsApp;

