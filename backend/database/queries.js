const queries = [
  `
      CREATE TABLE IF NOT EXISTS users (
        user_id VARCHAR(255) PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255) NOT NULL,
        user_type VARCHAR(50) NOT NULL
      );
    `,
  `
      CREATE TABLE IF NOT EXISTS admins (
        admin_id VARCHAR(255) PRIMARY KEY,
        admin_info VARCHAR(255),
        FOREIGN KEY (admin_id) REFERENCES users (user_id)
      );
    `,
  `
      CREATE TABLE IF NOT EXISTS quizzes (
        quiz_id VARCHAR(255) PRIMARY KEY,
        admin_id VARCHAR(255),
        quiz_title VARCHAR(255) NOT NULL,
        quiz_description TEXT,
        quiz_type VARCHAR(50),
        password_hash VARCHAR(255) DEFAULT NULL,
        generated_id VARCHAR(50) NOT NULL,
        start_time TIMESTAMP,
        end_time TIMESTAMP,
        FOREIGN KEY (admin_id) REFERENCES users (user_id)
      );
    `,
  `
      CREATE TABLE IF NOT EXISTS questions (
        question_id VARCHAR(255) PRIMARY KEY,
        quiz_id VARCHAR(255),
        question_text TEXT NOT NULL,
        is_single_correct BOOLEAN NOT NULL,
        options JSONB NOT NULL,
        correct_answers JSONB NOT NULL,
        FOREIGN KEY (quiz_id) REFERENCES quizzes (quiz_id)
      );
    `,
  `
      CREATE TABLE IF NOT EXISTS students (
        student_id VARCHAR(255) PRIMARY KEY,
        student_info VARCHAR(255),
        FOREIGN KEY (student_id) REFERENCES users (user_id)
      );
    `,
  `
      CREATE TABLE IF NOT EXISTS responses (
        response_id VARCHAR(255) PRIMARY KEY,
        student_id VARCHAR(255),
        question_id VARCHAR(255),
        selected_answers JSONB NOT NULL,
        submission_time TIMESTAMP,
        FOREIGN KEY (student_id) REFERENCES students (student_id),
        FOREIGN KEY (question_id) REFERENCES questions (question_id)
      );
    `,
];

module.exports = queries
