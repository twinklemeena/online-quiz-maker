const db = require('../../database/config');

class QuestionService {
  async createQuestion(question_id, quiz_id, question_text, is_single_correct, options, correct_answers) {
    try {
      const result = await db.query(
        'INSERT INTO questions (question_id, quiz_id, question_text, is_single_correct, options, correct_answers) VALUES ($1, $2, $3, $4, $5 ,$6) RETURNING *',
        [question_id, quiz_id, question_text, is_single_correct, options, correct_answers]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getQuestionById(questionId) {
    try {
      const result = await db.query('SELECT * FROM questions WHERE question_id = $1', [
        questionId,
      ]);

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getQuestionsByQuizId(quizId) {
    try {
      const result = await db.query('SELECT * FROM questions WHERE quiz_id = $1', [quizId]);
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  async updateQuestion(questionId, quiz_id, question_text, is_single_correct, options, correct_answers) {
    try {
      const result = await db.query(
        'UPDATE questions SET quiz_id = $1, question_text = $2, is_single_correct = $3, options = $4, correct_answers = $5 WHERE question_id = $6 RETURNING *',
        [quiz_id, question_text, is_single_correct, options, correct_answers, questionId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteQuestion(questionId) {
    try {
      const result = await db.query('DELETE FROM questions WHERE question_id = $1 RETURNING *', [questionId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async listQuestions() {
    try {
      const result = await db.query('SELECT * FROM questions');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // questions.services.js

  async addOptionByQuestionId(questionId, option) {
    try {
      const result = await db.query(
        'UPDATE questions SET options = options || $1 WHERE question_id = $2 RETURNING *',
        [JSON.stringify([option]), questionId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateOptionByQuestionIdAndOptionID(questionId, optionId, updatedOption) {
    try {
      const result = await db.query(
        'UPDATE questions SET options = jsonb_set(options, $1::text[], $2) WHERE question_id = $3 RETURNING *',
        [[optionId - 1], JSON.stringify(updatedOption), questionId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteOptionByQuestionId(questionId, optionId) {
    try {
      const result = await db.query(
        'UPDATE questions SET options = options - $1 WHERE question_id = $2 RETURNING *',
        [optionId - 1, questionId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateQuestionText(questionId, updatedQuestionText) {
    try {
      const result = await db.query(
        'UPDATE questions SET question_text = $1 WHERE question_id = $2 RETURNING *',
        [updatedQuestionText, questionId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  async updateQuestionTextByQuestionId(questionId, updatedQuestionText) {
    try {
      const result = await db.query(
        'UPDATE questions SET question_text = $1 WHERE question_id = $2 RETURNING *',
        [updatedQuestionText, questionId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateQuestionTypeByQuestionId(questionId, updatedQuestionType) {
    try {
      const result = await db.query(
        'UPDATE questions SET is_single_correct = $1 WHERE question_id = $2 RETURNING *',
        [updatedQuestionType, questionId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }
  // Add other question-related service methods as needed
}

module.exports = new QuestionService();
