const db = require('../../database/config');

class QuizService {
    async createQuiz(quiz_id, admin_id, quiz_type, password, generated_id, start_time, end_time, quiz_description, quiz_title) {
        try {
            const result = await db.query(
                'INSERT INTO quizzes (quiz_id, admin_id, quiz_type, password_hash, generated_id, start_time, end_time, quiz_description, quiz_title) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
                [quiz_id, admin_id, quiz_type, password, generated_id, start_time, end_time, quiz_description, quiz_title]
            );
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async getQuizById(quizId) {
        try {
            const result = await db.query('SELECT * FROM quizzes WHERE generated_id = $1', [
                quizId,
            ]);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async getAllQuizzesByAdminID(adminId) {
        try {
            const result = await db.query('SELECT * FROM quizzes WHERE admin_id = $1', [adminId]);
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    async updateQuiz(quizId, admin_id, quiz_type, password, generated_id, start_time, end_time) {
        try {
            const result = await db.query(
                'UPDATE quizzes SET admin_id = $1, quiz_type = $2, password_hash = $3, generated_id = $4, start_time = $5, end_time = $6 WHERE quiz_id = $7 RETURNING *',
                [admin_id, quiz_type, password, generated_id, start_time, end_time, quizId]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteQuiz(quizId) {
        try {
            const result = await db.query('DELETE FROM quizzes WHERE quiz_id = $1 RETURNING *', [quizId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async listQuizzes() {
        try {
            const result = await db.query('SELECT * FROM quizzes');
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    // Add other quiz-related service methods as needed
}

module.exports = new QuizService();
