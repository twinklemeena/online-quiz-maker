// userService.js

import api from './api';

const userService = {
    registerUser: async (userData) => {
        return api.post('/user/register', userData);
    },

    loginUser: async (loginData) => {
        return api.post('/user/login', loginData);
    },

    getUserById: async (userId) => {
        return api.get(`/users/${userId}`);
    },

    updateUserById: async (userId, updatedData) => {
        return api.put(`/users/${userId}`, updatedData);
    },
    // Add more user-related methods as needed
};

export default userService;
