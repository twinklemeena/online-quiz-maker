const express = require('express');
const adminController = require('./admin.controllers');

const router = express.Router();

router.post('/admins', adminController.createAdmin);
router.get('/admins/:adminId', adminController.getAdminById);

// Add other admin-related routes as needed

module.exports = router;
