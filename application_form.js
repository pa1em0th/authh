document.addEventListener("DOMContentLoaded", function() {
    // Получаем модель автомобиля из localStorage
    const carModel = localStorage.getItem("carModel");

    // Заполняем поле "Модель автомобиля"
    document.getElementById('carModel').value = carModel;

    // Очищаем localStorage после использования
    localStorage.removeItem("carModel");

    document.addEventListener("DOMContentLoaded", function() {
        const showLoginPopupButton = document.getElementById('showLoginPopup');
        const loginPopup = document.getElementById('loginPopup');
        const closeLoginPopup = document.querySelector('.close');
        const loginForm = document.getElementById('loginForm');
        const applicationForm = document.getElementById('applicationForm');
    
        // Получаем данные пользователей из localStorage
        const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || {};
    
        showLoginPopupButton.addEventListener('click', function() {
            loginPopup.style.display = 'block';
        });
    
        closeLoginPopup.addEventListener('click', function() {
            loginPopup.style.display = 'none';
        });
    
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const username = document.getElementById('login').value;
            const password = document.getElementById('password').value;
    
            if (!username || !password || !registeredUsers[username] || registeredUsers[username] !== password) {
                alert('Неверное имя пользователя или пароль');
                return;
            }
    
            loginPopup.style.display = 'none';
        });
    
        applicationForm.addEventListener('submit', function(event) {
            event.preventDefault();
    
            // Здесь должен быть код для отправки данных формы на сервер
            // Например, можно использовать fetch или XMLHttpRequest
    
            // Выводим сообщение о результате в виде всплывающего окна
            alert('Заявка успешно отправлена!');
        });
    });
});