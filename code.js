var registeredUsers = {};

// администратор
var administrator = {
    username: 'admin',
    password: 'password'
};

// добавляем администратора в объект registeredUsers
registeredUsers['admin'] = 'password';

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var newUsername = document.getElementById('newUsername').value;
    var newPassword = document.getElementById('newPassword').value;

    // проверяем, существует ли уже имя пользователя и не пустой ли пароль
    if (registeredUsers[newUsername]) {
        alert('Имя пользователя "' + newUsername + '" уже занято. Пожалуйста, выберите другое имя.');
        return;
    }

    if (!newPassword) {
        alert('Вы не ввели пароль. Пожалуйста, введите пароль.');
        return;
    }

    registeredUsers[newUsername] = newPassword;
    alert('Новый пользователь зарегистрирован: ' + newUsername);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // проверяем, существует ли имя пользователя и не пустой ли пароль
    if (!registeredUsers[username]) {
        alert('Неверное имя пользователя или пароль');
        return;
    }

    if (!password) {
        alert('Вы не ввели пароль. Пожалуйста, введите пароль.');
        return;
    }

    if (registeredUsers[username] && registeredUsers[username] === password) {
        if (username === 'admin') {
            window.location.href = 'https://sdo.ket44.ru';
        } else {
            // перенаправление для обычных пользователей
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

function deleteUser(username) {
    if (registeredUsers[username]) {
        delete registeredUsers[username];

        let users = JSON.parse(localStorage.getItem('users'));
        delete users[username];
        localStorage.setItem('users', JSON.stringify(users));
        alert('Пользователь "' + username + '" успешно удален.');
    } else {
        alert('Пользователь "' + username + '" не найден.');
    }
}
