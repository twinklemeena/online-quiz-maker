const express = require('express');
const responseController = require('./responses.controllers');

const router = express.Router();

router.post('/responses', responseController.createResponse);
router.get('/responses/:responseId', responseController.getResponseById);
router.put('/responses/:responseId', responseController.updateResponse);
router.delete('/responses/:responseId', responseController.deleteResponse);
router.get('/responses', responseController.listResponses);

module.exports = router;
