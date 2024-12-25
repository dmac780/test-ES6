// js/userView.js
export const userView = {
    renderUser(user) {
        return `
            <div class="user-card">
                <h3>${user.name}</h3>
                <p>Website: ${user.website}</p>
                <p>ID: ${user.id}</p>
            </div>
        `;
    },
    
    renderUsers(users) {
        const userList = document.getElementById('userList');
        userList.innerHTML = users.map(user => this.renderUser(user)).join('');
    }
};