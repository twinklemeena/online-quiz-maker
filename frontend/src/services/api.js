const BASE_URL = 'http://localhost:3000/api/v1';

const api = {
    get: (url) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}${url}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error('Error during GET request:', error.message);
                reject(error);
            }
        });
    },
    post: (url, body) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}${url}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error('Error during POST request:', error.message);
                reject(error);
            }
        });
    },
    put: (url, body) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}${url}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error('Error during PUT request:', error.message);
                reject(error);
            }
        });
    },
    patch: (url, body) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}${url}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(body),
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error('Error during PATCH request:', error.message);
                reject(error);
            }
        });
    },
    delete: (url) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`${BASE_URL}${url}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error('Error during DELETE request:', error.message);
                reject(error);
            }
        });
    },
};

export default api;
