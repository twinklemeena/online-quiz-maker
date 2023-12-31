const db = require('../../database/config');

class ResponseService {
  async createResponse(student_id, question_id, selected_answers) {
    try {
      const result = await db.query(
        'INSERT INTO responses (student_id, question_id, selected_answers) VALUES ($1, $2, $3) RETURNING *',
        [student_id, question_id, selected_answers]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async getResponseById(responseId) {
    try {
      const result = await db.query('SELECT * FROM responses WHERE response_id = $1', [
        responseId,
      ]);

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async updateResponse(responseId, student_id, question_id, selected_answers) {
    try {
      const result = await db.query(
        'UPDATE responses SET student_id = $1, question_id = $2, selected_answers = $3 WHERE response_id = $4 RETURNING *',
        [student_id, question_id, selected_answers, responseId]
      );

      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async deleteResponse(responseId) {
    try {
      const result = await db.query('DELETE FROM responses WHERE response_id = $1 RETURNING *', [responseId]);
      return result.rows[0];
    } catch (error) {
      throw error;
    }
  }

  async listResponses() {
    try {
      const result = await db.query('SELECT * FROM responses');
      return result.rows;
    } catch (error) {
      throw error;
    }
  }

  // Add other response-related service methods as needed
}

module.exports = new ResponseService();
