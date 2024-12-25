// js/userService.js
export const userService = {
    async getUsers() {
        const users = [
            { id: 1, name: 'John Doe', website: 'example.com' },
            { id: 2, name: 'Jane Smith', website: 'example1.com' },
            { id: 3, name: 'Bob Johnson', website: 'example2.com' }
        ];
        // Simulate API delay
        return new Promise(resolve => setTimeout(() => resolve(users), 500));
    }
};