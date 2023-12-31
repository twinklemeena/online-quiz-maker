const bcrypt = require('bcrypt');
const saltRounds = 10;
const db = require('../../database/config');

class UserService {
    async registerUser(user_id, username, password, user_type) {
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const result = await db.query(
                'INSERT INTO users (user_id, username, password_hash, user_type) VALUES ($1, $2, $3, $4) RETURNING *',
                [user_id, username, hashedPassword, user_type]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async loginUser(username, password) {
        try {
            const result = await db.query('SELECT * FROM users WHERE username = $1', [username]);
            const user = result.rows[0];
            if (!user) {
                return { success: 0, message: "user not found" }; // User not found
            }
            const passwordMatch = await bcrypt.compare(password, user.password_hash);
            if (!passwordMatch) {
                return { success: 0, message: "Password didn't match" }; // Passwords do not match
            }
            return {success: 1, message: "Logged In Successfully", username: user.username, user_type: user.user_type, user_id: user.user_id};
        } catch (error) {
            throw error;
        }
    }

    async getUser(userId) {
        try {
            const result = await db.query('SELECT * FROM users WHERE user_id = $1', [userId]);
            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    async updateUser(userId, username, password, user_type) {
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);
            const result = await db.query(
                'UPDATE users SET username = $1, password_hash = $2, user_type = $3 WHERE user_id = $4 RETURNING *',
                [username, hashedPassword, user_type, userId]
            );

            return result.rows[0];
        } catch (error) {
            throw error;
        }
    }

    // Add other user-related service methods as needed
}

module.exports = new UserService();
