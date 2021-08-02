const express = require('express');
const router = express();

const { prove, findAll, createMessage } = require('../controllers/whatsApp.controller');

router.get(`/`, prove);
router.get(`/messages/sync`, findAll);
router.post(`/messages/new`, createMessage);

module.exports = router;