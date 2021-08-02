const express = require('express');
const router = express();

const { findAll, createMessage } = require('../controllers/whatsApp.controller');

router.get(`/`, findAll);
router.get(`/messages/new`, createMessage);

module.exports = router;