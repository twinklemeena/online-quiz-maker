const questionService = require('./questions.services');

class QuestionController {
    async createQuestion(req, res, next) {
        try {
            const { question_id, quiz_id, question_text, is_single_correct, options, correct_answers } = req.body;
            const createdQuestion = await questionService.createQuestion(question_id, quiz_id, question_text, is_single_correct, options, correct_answers);
            res.status(201).json(createdQuestion);
        } catch (error) {
            throw new Error(error);
        }
    }
    async getQuestionById(req, res, next) {
        try {
            const { questionId } = req.params;
            const question = await questionService.getQuestionById(questionId);

            if (!question) {
                return res.status(404).json({ message: 'Question not found' });
            }

            res.status(200).json(question);
        } catch (error) {
            throw new Error(error);
        }
    }

    async getQuestionsByQuizId(req, res, next) {
        try {
            const { quizId } = req.params;
            const questions = await questionService.getQuestionsByQuizId(quizId);

            res.status(200).json(questions);
        } catch (error) {
            throw new Error(error);
        }
    }
    async updateQuestion(req, res, next) {
        try {
            const { questionId } = req.params;
            const { quiz_id, question_text, is_single_correct, options, correct_answers } = req.body;
            const updatedQuestion = await questionService.updateQuestion(questionId, quiz_id, question_text, is_single_correct, options, correct_answers);

            if (!updatedQuestion) {
                return res.status(404).json({ message: 'Question not found' });
            }

            res.status(200).json(updatedQuestion);
        } catch (error) {
            throw new Error(error);
        }
    }
    async deleteQuestion(req, res, next) {
        try {
            const { questionId } = req.params;
            const deletedQuestion = await questionService.deleteQuestion(questionId);

            if (!deletedQuestion) {
                return res.status(404).json({ message: 'Question not found' });
            }

            res.status(204).end();
        } catch (error) {
            throw new Error(error);
        }
    }
    async listQuestions(req, res, next) {
        try {
            const questions = await questionService.listQuestions();
            res.status(200).json(questions);
        } catch (error) {
            throw new Error(error);
        }
    }
    async addOptionByQuestionId(req, res, next) {
        try {
            const { questionId } = req.params;
            const { option } = req.body;
            console.log(option, questionId);
            const updatedQuestion = await questionService.addOptionByQuestionId(questionId, option);

            res.status(200).json(updatedQuestion);
        } catch (error) {
            next(error);
        }
    }

    async updateOptionByQuestionIdAndOptionID(req, res, next) {
        try {
            const { questionId, optionId } = req.params;
            const { updatedOption } = req.body;
            console.log(questionId, optionId, updatedOption, "sad")
            const updatedQuestion = await questionService.updateOptionByQuestionIdAndOptionID(questionId, optionId, updatedOption);

            res.status(200).json(updatedQuestion);
        } catch (error) {
            next(error);
        }
    }

    async deleteOptionByQuestionId(req, res, next) {
        try {
            const { questionId, optionId } = req.params;
            const updatedQuestion = await questionService.deleteOptionByQuestionId(questionId, optionId);

            res.status(200).json(updatedQuestion);
        } catch (error) {
            next(error);
        }
    }

    async updateQuestionText(req, res, next) {
        try {
            const { questionId } = req.params;
            const { updatedQuestionText } = req.body;
            const updatedQuestion = await questionService.updateQuestionText(questionId, updatedQuestionText);

            res.status(200).json(updatedQuestion);
        } catch (error) {
            next(error);
        }
    }

    async updateQuestionTextByQuestionId(req, res, next) {
        try {
            const { questionId } = req.params;
            console.log(questionId)
            const { updatedQuestionText } = req.body;
            console.log(questionId, updatedQuestionText);
            const updatedQuestion = await questionService.updateQuestionTextByQuestionId(questionId, updatedQuestionText);
            if (!updatedQuestion) {
                return res.status(404).json({ message: 'Question not found' });
            }
            res.status(200).json(updatedQuestion);
        } catch (error) {
            next(error);
        }
    }

    async updateQuestionTypeByQuestionId(req, res, next) {
        try {
            const { questionId } = req.params;
            const { updatedQuestionType } = req.body;

            const updatedQuestion = await questionService.updateQuestionTypeByQuestionId(questionId, updatedQuestionType);

            if (!updatedQuestion) {
                return res.status(404).json({ message: 'Question not found' });
            }

            res.status(200).json(updatedQuestion);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new QuestionController();
