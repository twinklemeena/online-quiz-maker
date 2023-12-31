const express = require('express');
const questionController = require('./questions.controllers');

const router = express.Router();

router.post('/', questionController.createQuestion);
router.get('/:questionId', questionController.getQuestionById);
router.put('/:questionId', questionController.updateQuestion);
router.delete('/:questionId', questionController.deleteQuestion);
router.get('/', questionController.listQuestions);
router.patch('/:questionId/options', questionController.addOptionByQuestionId);
router.put('/:questionId/options/:optionId', questionController.updateOptionByQuestionIdAndOptionID);
router.delete('/:questionId/options/:optionId', questionController.deleteOptionByQuestionId);
router.patch('/:questionId/updateText', questionController.updateQuestionText);
router.get('/quiz/:quizId', questionController.getQuestionsByQuizId);
router.patch('/:questionId/updateType', questionController.updateQuestionTypeByQuestionId);

// Add other question-related routes as needed

module.exports = router;
