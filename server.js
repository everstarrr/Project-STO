import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

// Настройка CORS
app.use(cors());
app.use(bodyParser.json());



const TELEGRAM_API_TOKEN = '7428587913:AAEKD9I3YnCTABV_iKmm1hcsWgeqZc2VD-E';
const TELEGRAM_CHAT_ID = '634004130'; 

// Обработчик для получения данных из формы
app.post('/submit', (req, res) => {
    const { firstName, lastName, phoneNumber } = req.body;
    const message = `Имя: ${firstName}\nФамилия: ${lastName}\nНомер телефона: ${phoneNumber}`;

    // Отправка сообщения в Telegram
    fetch(`https://api.telegram.org/bot${TELEGRAM_API_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        res.status(200).send('Form data sent to Telegram bot');
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).send('Error sending data to Telegram bot');
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});