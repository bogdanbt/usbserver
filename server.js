const express = require('express');
const path = require('path');
const cors = require('cors');
const galleryRoutes = require('./routes/gallery'); // Роуты для галереи
const newsRoutes = require('./routes/news'); // Роуты для новостей
// const db = require('./database'); // Подключаем базу данных
const userRoutes = require('./routes/users'); // Подключаем маршруты для пользователей
// const authMiddleware = require('./authMiddleware'); // Импортируем middleware
const cantonsRoutes = require('./routes/cantons');
const activitiesRoutes = require('./routes/activities');

const app = express();
const PORT = 8000;

// Настройка CORS
// app.use(cors());
app.use(cors({
  origin: ['http://localhost:3000', 'https://usbtest.netlify.app']
}));


// Обработка JSON-запросов
app.use(express.json());

// Настройка статической папки для изображений
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Подключение маршрутов
app.use('/gallery', galleryRoutes); // Галерея
app.use('/news', newsRoutes); // Новости
app.use('/api/users', userRoutes);
app.use('/cantons', cantonsRoutes);
app.use('/activities', activitiesRoutes);
// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
