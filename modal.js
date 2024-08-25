document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем отправку формы по умолчанию

    // Получаем значения полей формы
    const firstName = document.getElementById('first-name').value;
    const phoneNumber = document.getElementById('last-name').value; // Предполагается, что это номер телефона
    const carBrand = document.getElementById('car-brand').value;
    const vinCode = document.getElementById('car-code').value; // Предполагается, что добавлен новый id 'vin-code'
    const other = document.getElementById('other').value;

    // Собираем выбранные услуги (чекбоксы)
    const services = Array.from(
      document.querySelectorAll(
        '.checkbox-container input[type="checkbox"]:checked'
      )
    ).map(checkbox => checkbox.parentNode.textContent.trim());

    // Формируем объект с данными
    const formData = {
      firstName: firstName,
      phoneNumber: phoneNumber,
      carBrand: carBrand,
      vinCode: vinCode,
      services: services,
      other: other,
    };

    // Отправка данных на сервер
    fetch('http://localhost:3000/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.text())
      .then(data => console.log('Success:', data))
      .catch(error => console.error('Error:', error));
  });