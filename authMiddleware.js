const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret'; // Ваш секретный ключ

const authMiddleware = (req, res, next) => {
  // Проверяем наличие заголовка Authorization
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Нет токена, авторизация запрещена' });
  }

  try {
    // Извлекаем и проверяем токен
    const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
    req.user = decoded; // Сохраняем информацию из токена в req.user
    next(); // Передаём управление следующему обработчику
  } catch (err) {
    res.status(401).json({ message: 'Неверный токен' });
  }
};

module.exports = authMiddleware;
