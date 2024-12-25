// js/app.js
import { userService } from './userService.js';
import { userView } from './userView.js';

async function loadUsers() {
    const users = await userService.getUsers();
    userView.renderUsers(users);
}

// Initialize the application
document.getElementById('loadUsers').addEventListener('click', loadUsers);