const db = require('../../database/config');

class AdminService {
    async createAdmin(adminInfo) {
        try {
            const result = await db.query(
                'INSERT INTO admins (admin_info) VALUES ($1) RETURNING *',
                [adminInfo]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async getAdminById(adminId) {
        try {
            const result = await db.query('SELECT * FROM admins WHERE admin_id = $1', [
                adminId,
            ]);

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    // Add other admin-related service methods as needed
}

module.exports = new AdminService();
