const db = require('../../database/config');

class StudentService {
    async createStudent(student_info) {
        try {
            const result = await db.query(
                'INSERT INTO students (student_info) VALUES ($1) RETURNING *',
                [student_info]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async getStudentById(studentId) {
        try {
            const result = await db.query('SELECT * FROM students WHERE student_id = $1', [
                studentId,
            ]);

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async updateStudent(studentId, student_info) {
        try {
            const result = await db.query(
                'UPDATE students SET student_info = $1 WHERE student_id = $2 RETURNING *',
                [student_info, studentId]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async deleteStudent(studentId) {
        try {
            const result = await db.query('DELETE FROM students WHERE student_id = $1 RETURNING *', [studentId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async listStudents() {
        try {
            const result = await db.query('SELECT * FROM students');
            return result.rows;
        } catch (error) {
            throw error;
        }
    }

    // Add other student-related service methods as needed
}

module.exports = new StudentService();
