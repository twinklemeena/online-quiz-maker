const responseService = require('./responses.services');

class ResponseController {
    async createResponse(req, res, next) {
        try {
            const { student_id, question_id, selected_answers } = req.body;
            const createdResponse = await responseService.createResponse(student_id, question_id, selected_answers);
            res.status(201).json(createdResponse);
        } catch (error) {
            next(error);
        }
    }

    async getResponseById(req, res, next) {
        try {
            const { responseId } = req.params;
            const response = await responseService.getResponseById(responseId);

            if (!response) {
                return res.status(404).json({ message: 'Response not found' });
            }

            res.status(200).json(response);
        } catch (error) {
            next(error);
        }
    }

    async updateResponse(req, res, next) {
        try {
            const { responseId } = req.params;
            const { student_id, question_id, selected_answers } = req.body;
            const updatedResponse = await responseService.updateResponse(responseId, student_id, question_id, selected_answers);

            if (!updatedResponse) {
                return res.status(404).json({ message: 'Response not found' });
            }

            res.status(200).json(updatedResponse);
        } catch (error) {
            next(error);
        }
    }

    async deleteResponse(req, res, next) {
        try {
            const { responseId } = req.params;
            const deletedResponse = await responseService.deleteResponse(responseId);

            if (!deletedResponse) {
                return res.status(404).json({ message: 'Response not found' });
            }

            res.status(204).end();
        } catch (error) {
            next(error);
        }
    }

    async listResponses(req, res, next) {
        try {
            const responses = await responseService.listResponses();
            res.status(200).json(responses);
        } catch (error) {
            next(error);
        }
    }

    // Add other response-related controller methods as needed
}

module.exports = new ResponseController();
