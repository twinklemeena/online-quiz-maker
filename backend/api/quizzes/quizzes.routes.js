const express = require('express');
const quizController = require('./quizzes.controllers');

const router = express.Router();

router.post('/', quizController.createQuiz);
router.get('/:quizId', quizController.getQuizById);
router.put('/:quizId', quizController.updateQuiz);
router.delete('/:quizId', quizController.deleteQuiz);
router.get('/', quizController.listQuizzes);
router.get('/admin/:adminId', quizController.getAllQuizzesByAdminID);

// Add other quiz-related routes as needed

module.exports = router;
