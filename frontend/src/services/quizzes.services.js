import api from './api';

const quizService = {
    createQuiz: async (quizData) => {
        return api.post('/quizzes', quizData);
    },
    getQuizById: async (quizId) => {
        return api.get(`/quizzes/${quizId}`);
    },
    updateQuiz: async (quizId, updatedData) => {
        return api.put(`/quizzes/${quizId}`, updatedData);
    },
    deleteQuiz: async (quizId) => {
        return api.delete(`/quizzes/${quizId}`);
    },
    listQuizzes: async () => {
        return api.get('/quizzes');
    },
    getAllQuizzesByAdminID: async (adminId) => {
        return api.get(`/quizzes/admin/${adminId}`);
    }
};

export default quizService;
