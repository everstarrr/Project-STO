// Инициализация MicroModal
MicroModal.init({
    onShow: modal => {
        console.info(`${modal.id} is shown`);
        // Находим форму внутри модального окна
        var modalForm = document.querySelector('.modal-form');
        // Убираем класс hidden, чтобы показать форму при открытии модального окна
        modalForm.classList.remove('hidden');
    },
    onClose: modal => {
        console.info(`${modal.id} is hidden`);
        // Находим форму внутри модального окна
        var modalForm = document.querySelector('.modal-form');
        // Добавляем класс hidden, чтобы скрыть форму при закрытии модального окна
        modalForm.classList.add('hidden');
    },
    openTrigger: 'data-micromodal-trigger',
    closeTrigger: 'data-micromodal-close',
    openClass: 'is-open',
    disableScroll: true,
    disableFocus: false,
    awaitOpenAnimation: false,
    awaitCloseAnimation: false,
    debugMode: false
});

// тут не находит элемент, пофиксишь

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Предотвращаем отправку формы по умолчанию

//     // Получаем значения полей формы
//     const firstName = document.getElementById('first-name').value;
//     const lastName = document.getElementById('last-name').value;
    

//     // Формируем объект с данными
//     const formData = {
//         firstName: firstName,
//         lastName: lastName
       
//     };

//     // Отправка данных на сервер
//     fetch('http://localhost:3000/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//     })
//     .then(response => response.text())
//     .then(data => console.log('Success:', data))
//     .catch((error) => console.error('Error:', error));
// });