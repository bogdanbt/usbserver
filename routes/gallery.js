

const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Подключение базы данных галереи
const galleryDb = new sqlite3.Database(path.resolve(__dirname, '../database/gallery.db'), (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных галереи:', err);
  } else {
    console.log('База данных галереи подключена.');
  }
});

// Настройка хранилища для Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Указываем папку для сохранения
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Создаем уникальное имя файла
  },
});

const upload = multer({ storage });

// Эндпоинт для загрузки фотографий
router.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Ошибка загрузки файла' });
  }

  // Сохраняем данные о файле в базу
  // const filePath = `http://localhost:8000/uploads/${req.file.filename}`;
  const filePath = req.file.filename;
  const fileName = req.file.originalname;

  galleryDb.run(
    'INSERT INTO gallery (file_name, file_path) VALUES (?, ?)',
    [fileName, filePath],
    function (err) {
      if (err) {
        console.error('Ошибка сохранения файла в базу данных:', err);
        return res.status(500).json({ error: 'Ошибка сохранения файла' });
      }
      res.status(201).json({ id: this.lastID, filePath });
    }
  );
});

// Эндпоинт для получения всех фотографий
router.get('/', (req, res) => {
  galleryDb.all('SELECT * FROM gallery', [], (err, rows) => {
    if (err) {
      console.error('Ошибка получения фотографий:', err);
      res.status(500).json({ error: 'Ошибка получения фотографий' });
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
