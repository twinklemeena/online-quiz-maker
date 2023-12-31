const userService = require('./users.services');

class UserController {
    async registerUser(req, res, next) {
        try {
            const { user_id, username, password, user_type } = req.body;
            const registeredUser = await userService.registerUser(user_id, username, password, user_type);
            res.status(201).json(registeredUser);
        } catch (error) {
            next(error);
        }
    }

    async loginUser(req, res, next) {
        try {
            const { username, password } = req.body;
            const user = await userService.loginUser(username, password);

            if (!user) {
                return res.status(401).json({ message: 'Invalid username or password' });
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async getUser(req, res, next) {
        try {
            const { userId } = req.params;
            const user = await userService.getUser(userId);

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user);
        } catch (error) {
            next(error);
        }
    }

    async updateUser(req, res, next) {
        try {
            const { userId } = req.params;
            const { username, password, user_type } = req.body;
            const updatedUser = await userService.updateUser(userId, username, password, user_type);

            if (!updatedUser) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(updatedUser);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new UserController();
