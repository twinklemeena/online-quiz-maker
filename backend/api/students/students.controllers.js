const studentService = require('./students.services');

class StudentController {
  async createStudent(req, res, next) {
    try {
      const { student_info } = req.body;
      const createdStudent = await studentService.createStudent(student_info);
      res.status(201).json(createdStudent);
    } catch (error) {
      next(error);
    }
  }

  async getStudentById(req, res, next) {
    try {
      const { studentId } = req.params;
      const student = await studentService.getStudentById(studentId);

      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json(student);
    } catch (error) {
      next(error);
    }
  }

  async updateStudent(req, res, next) {
    try {
      const { studentId } = req.params;
      const { student_info } = req.body;
      const updatedStudent = await studentService.updateStudent(studentId, student_info);

      if (!updatedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(200).json(updatedStudent);
    } catch (error) {
      next(error);
    }
  }

  async deleteStudent(req, res, next) {
    try {
      const { studentId } = req.params;
      const deletedStudent = await studentService.deleteStudent(studentId);

      if (!deletedStudent) {
        return res.status(404).json({ message: 'Student not found' });
      }

      res.status(204).end();
    } catch (error) {
      next(error);
    }
  }

  async listStudents(req, res, next) {
    try {
      const students = await studentService.listStudents();
      res.status(200).json(students);
    } catch (error) {
      next(error);
    }
  }
  
}

module.exports = new StudentController();
