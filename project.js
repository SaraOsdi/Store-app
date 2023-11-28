/*******************MANAGER******************* */
const mongoose = require('mongoose');
const managerSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },

    password: {
        type: Number,
        require: true,
        min: 2

    },

})
const Manager = mongoose.model('Manager', managerSchema);
Manager.insertMany([
    { user: "Noa", password: 1234 }

]).then(data => {
    console.log('it works!!');
})
    .catch(err => {

        console.log(err);
    })

const form = document.querySelector('form');
const usernameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');
const loginButton = document.querySelector('#login-button');
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Check if username and password are valid
    if (isValidUser(username.value, password.value)) {
        // Redirect to admin page
        window.location.href = "http://127.0.0.1:3000/project.html";
    } else {
        alert("Invalid username or password");
    }
});

function isValidUser(users, username, password) {
    // Check if username and password are in the list of valid users
    for (let user of users) {
        if (user.username === username && user.password === password) {
            return true;
        }
    }
    return false;
}










