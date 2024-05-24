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

    if (!newUsername || !newPassword || registeredUsers[newUsername]) {
        alert(newUsername ? 'Имя пользователя "' + newUsername + '" уже занято. Пожалуйста, выберите другое имя.' : 'Вы не ввели имя пользователя. Пожалуйста, введите имя пользователя.');
        return;
    }

    registeredUsers[newUsername] = newPassword;
    alert('Новый пользователь зарегистрирован: ' + newUsername);
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username || !password || !registeredUsers[username] || registeredUsers[username] !== password) {
        alert(username ? 'Неверное имя пользователя или пароль' : 'Вы не ввели имя пользователя. Пожалуйста, введите имя пользователя.');
        return;
    }

    if (username === 'admin') {
        window.location.href = 'https://sdo.ket44.ru';
    } else {
        window.open('user_dashboard.html', '_blank'); // Открытие нового окна для обычных пользователей
    }
});

document.getElementById('deleteUserForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var usernameToDelete = document.getElementById('usernameToDelete').value;

    if (!usernameToDelete || !registeredUsers[usernameToDelete]) {
        alert('Пользователь "' + usernameToDelete + '" не найден.');
        return;
    }

    delete registeredUsers[usernameToDelete];
    alert('Пользователь "' + usernameToDelete + '" успешно удален.');
});

function updateDateTime() {
    var now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleTimeString();
    document.getElementById('currentDate').textContent = now.toLocaleDateString();
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Инициализация отображения времени и даты при загрузке страницы
