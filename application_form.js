document.addEventListener("DOMContentLoaded", function() {
    // Получаем модель автомобиля из localStorage
    const carModel = localStorage.getItem("carModel");

    // Заполняем поле "Модель автомобиля"
    document.getElementById('carModel').value = carModel;

    // Очищаем localStorage после использования
    localStorage.removeItem("carModel");

    const loginPopup = document.getElementById('loginPopup');
    const closeLoginPopup = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
    const applicationForm = document.getElementById('applicationForm');
    const submitButton = document.querySelector('button[type="submit"]');

    // Получаем данные пользователей из localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};

    closeLoginPopup.addEventListener('click', function() {
        loginPopup.style.display = 'none';
    });

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Логин и пароль обязательны для заполнения');
            return;
        }

        if (!registeredUsers[username] || registeredUsers[username] !== password) {
            alert('Неверное имя пользователя или пароль');
            return;
        }

        loginPopup.style.display = 'none';

        // Выводим сообщение о результате в виде всплывающего окна
        alert('Заявка успешно отправлена!');

        // Обновляем страницу
        window.location.reload();
    });

    applicationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Открываем всплывающее окно перед отправкой заявки
        loginPopup.style.display = 'block';

        // Проверяем, заполнены ли логин и пароль
        const username = document.getElementById('login').value;
        const password = document.getElementById('password').value;

        if (!username || !password) {
            alert('Логин и пароль обязательны для заполнения перед отправкой заявки');
            return;
        }

        // Здесь должен быть код для отправки данных формы на сервер
        // Например, можно использовать fetch или XMLHttpRequest

        // Выводим сообщение о результате в виде всплывающего окна
        alert('Заявка успешно отправлена!');
    });
    document.getElementById('applicationForm').addEventListener('submit', function(event) {
        if (!document.getElementById('payment').checked) {
            event.preventDefault();
            alert('Для отправки заявки необходимо подтвердить оплату.');
        }
    });

    document.getElementById('payment').addEventListener('change', function() {
        if (this.checked) {
            document.getElementById('paymentPopup').style.display = 'block';
        } else {
            document.getElementById('paymentPopup').style.display = 'none';
        }
    });

    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('paymentPopup').style.display = 'none';
    });
});