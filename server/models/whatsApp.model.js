const mongoose = require('mongoose');

const WhatsAppSchema = new mongoose.Schema({
    message: String,
    name: String,
    timestamp: String,
    received: Boolean

}, {timestamps: true});

const WhatsApp = mongoose.model("message", WhatsAppSchema);

module.exports = WhatsApp;

