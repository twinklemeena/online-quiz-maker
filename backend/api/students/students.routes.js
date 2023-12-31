const express = require('express');
const studentController = require('./students.controllers');

const router = express.Router();

router.post('/students', studentController.createStudent);
router.get('/students/:studentId', studentController.getStudentById);
router.put('/students/:studentId', studentController.updateStudent);
router.delete('/students/:studentId', studentController.deleteStudent);
router.get('/students', studentController.listStudents);

// Add other student-related routes as needed

module.exports = router;
