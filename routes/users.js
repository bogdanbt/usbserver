const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');

const router = express.Router();
const JWT_SECRET = 'your_jwt_secret';

// Фиксированные данные администратора
const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('adminpassword', 10); // Захешируйте пароль

// Логин
router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('Введите имя пользователя'),
    body('password').notEmpty().withMessage('Введите пароль'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { username, password } = req.body;

    // Проверка логина
    if (username !== ADMIN_USERNAME) {
      return res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
    }

    // Проверка пароля
    const isMatch = await bcrypt.compare(password, ADMIN_PASSWORD_HASH);
    if (!isMatch) {
      return res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
    }

    // Создание токена
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  }
);

module.exports = router;
