const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoutes = require('./api/admin/admin.routes');
const userRoutes = require('./api/users/users.routes');
const quizzesRoutes = require('./api/quizzes/quizzes.routes');
const questionsRoutes = require('./api/questions/questions.routes');
const studentsRoutes = require('./api/students/students.routes');
const responsesRoutes = require('./api/responses/responses.routes');

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/v1/admin', adminRoutes);
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/quizzes', quizzesRoutes);
app.use('/api/v1/questions', questionsRoutes);
app.use('/api/v1/students', studentsRoutes);
app.use('/api/v1/responses', responsesRoutes);

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
