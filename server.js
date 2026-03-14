const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Простые хранилища данных (in-memory)
let users = [];

app.post('/api/register', (req, res) => {
    const { name, desc, photo, /* другие поля */ } = req.body;
    console.log('New user registered:', req.body);
    
    const newUser = { id: users.length + 1, name, desc, photo };
    users.push(newUser);

    res.json({ success: true, user: newUser });
});

app.post('/api/login', (req, res) => {
    // Простая заглушка логина
    const { email } = req.body;
    console.log('Login attempt:', email);
    res.json({ success: true, message: 'Login successful' });
});

// Заглушка для получения данных профиля
app.get('/api/profile', (req, res) => {
    res.json({ 
        name: 'Тестовый Пользователь', 
        age: 25, 
        location: 'Москва',
        desc: 'Это тестовый профиль.' 
    });
});

app.listen(port, () => {
    console.log(`Backend server running at http://localhost:${port}`);
});
