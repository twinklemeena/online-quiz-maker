const adminService = require('./admin.services');

class AdminController {
    async createAdmin(req, res, next) {
        try {
            const { admin_info } = req.body;
            const createdAdmin = await adminService.createAdmin(admin_info);
            res.status(201).json(createdAdmin);
        } catch (error) {
            next(error);
        }
    }

    async getAdminById(req, res, next) {
        try {
            const { adminId } = req.params;
            const admin = await adminService.getAdminById(adminId);

            if (!admin) {
                return res.status(404).json({ message: 'Admin not found' });
            }

            res.status(200).json(admin);
        } catch (error) {
            next(error);
        }
    }

    // Add other admin-related controller methods as needed
}

module.exports = new AdminController();
