var registeredUsers = {};

// администратор
var administrator = {
    username: 'admin',
    password: 'password'
};

// добавляем администратора в объект registeredUsers
Object.assign(registeredUsers, administrator);

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // проверяем, существует ли уже имя пользователя
    if (registeredUsers[newUsername]) {
        alert('Имя пользователя "' + newUsername + '" уже занято. Пожалуйста, выберите другое имя.');
        return;
    }

    registeredUsers[newUsername] = newPassword;
    registerUser(newUsername, newPassword); // регистрируем нового пользователя
    alert('Новый пользователь зарегистрирован: ' + newUsername);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (registeredUsers[username] && registeredUsers[username] === password) {
        if (username === 'admin') {
            window.location.href = 'https://sdo.ket44.ru';
        } else {
            window.location.href = 'https://sdo.ket44.ru';
        }
    } else {
        alert('Неверное имя пользователя или пароль');
    }
});

// регистрация нового пользователя
function registerUser(username, password) {
    registeredUsers[username] = password; // добавление нового пользователя в объект registeredUsers

    if (!localStorage.getItem('users')) {
        localStorage.setItem('users', JSON.stringify({})); // хранилище пользователей в localStorage
    }
    let users = JSON.parse(localStorage.getItem('users')); // данные о пользователях из localStorage
    users[username] = password; // новый пользователь в данные о пользователях
    localStorage.setItem('users', JSON.stringify(users));
    console.log('Пользователь успешно зарегистрирован.');
}