// questionService.js

import api from './api';

const questionService = {
    createQuestion: async (questionData) => {
        return api.post('/questions', questionData);
    },

    getQuestionById: async (questionId) => {
        return api.get(`/questions/${questionId}`);
    },

    updateQuestion: async (questionId, updatedData) => {
        return api.put(`/questions/${questionId}`, updatedData);
    },

    deleteQuestion: async (questionId) => {
        return api.delete(`/questions/${questionId}`);
    },

    listQuestions: async () => {
        return api.get('/questions');
    },

    addOptionByQuestionId: async (questionId, option) => {
        return api.patch(`/questions/${questionId}/options`, option);
    },

    updateOptionByQuestionIdAndOptionID: async (questionId, optionId, updatedOptionData) => {
        return api.put(`/questions/${questionId}/options/${optionId}`, updatedOptionData);
    },

    deleteOptionByQuestionId: async (questionId, optionId) => {
        return api.delete(`/questions/${questionId}/options/${optionId}`);
    },

    updateQuestionText: async (questionId, newTextData) => {
        return api.patch(`/questions/${questionId}/updateText`, newTextData);
    },

    updateQuestionTypeByQuestionId: async (questionId, newTypeData) => {
        return api.patch(`/questions/${questionId}/updateType`, newTypeData);
    },

    getQuestionsByQuizId: async (quizId) => {
        return api.get(`/questions/quiz/${quizId}`);
    }

    // Add other question-related methods as needed
};

export default questionService;
