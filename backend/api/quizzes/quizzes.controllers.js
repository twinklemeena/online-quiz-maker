const quizService = require('./quizzes.services');

class QuizController {
    async createQuiz(req, res) {
        try {
            const { quiz_id, admin_id, quiz_type, password, generated_id, start_time, end_time, quiz_title, quiz_description } = req.body;
            const createdQuiz = await quizService.createQuiz(quiz_id, admin_id, quiz_type, password, generated_id, start_time, end_time, quiz_description, quiz_title);
            res.status(201).json(createdQuiz);
        } catch (error) {
            throw new Error(error)
        }
    }

    async getAllQuizzesByAdminID(req, res) {
        try {
            const { adminId } = req.params;
            const quizzes = await quizService.getAllQuizzesByAdminID(adminId);
            res.status(200).json(quizzes);
        } catch (error) {
            throw new Error(error)
        }
    }

    async getQuizById(req, res) {
        try {
            const { quizId } = req.params;
            const quiz = await quizService.getQuizById(quizId);

            if (!quiz) {
                return res.status(404).json({ message: 'Quiz not found' });
            }

            res.status(200).json(quiz);
        } catch (error) {
            throw new Error(error)
        }
    }

    async updateQuiz(req, res) {
        try {
            const { quizId } = req.params;
            const { admin_id, quiz_type, password, generated_id, start_time, end_time } = req.body;
            const updatedQuiz = await quizService.updateQuiz(quizId, admin_id, quiz_type, password, generated_id, start_time, end_time);

            if (!updatedQuiz) {
                return res.status(404).json({ message: 'Quiz not found' });
            }

            res.status(200).json(updatedQuiz);
        } catch (error) {
            throw new Error(error)
        }
    }

    async deleteQuiz(req, res) {
        try {
            const { quizId } = req.params;
            const deletedQuiz = await quizService.deleteQuiz(quizId);

            if (!deletedQuiz) {
                return res.status(404).json({ message: 'Quiz not found' });
            }

            res.status(204).end();
        } catch (error) {
            throw new Error(error)
        }
    }

    async listQuizzes(req, res) {
        try {
            const quizzes = await quizService.listQuizzes();
            res.status(200).json(quizzes);
        } catch (error) {
            throw new Error(error)
        }
    }

    // Add other quiz-related controller methods as needed
}

module.exports = new QuizController();
