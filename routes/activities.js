const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = express.Router();
const dbPath = path.resolve(__dirname, '../database/activities.db');
const db = new sqlite3.Database(dbPath);

// Получение списка всех активностей
router.get('/', (req, res) => {
  db.all('SELECT * FROM activities', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка получения списка активностей' });
    } else {
      res.json(rows);
    }
  });
});

// Получение деталей одной активности
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM activities WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка получения данных активности' });
    } else if (!row) {
      res.status(404).json({ error: 'Активность не найдена' });
    } else {
      res.json(row);
    }
  });
});

// Создание новой активности
router.post('/', (req, res) => {
  const {
    canton,
    city,
    photo,
    name_ua,
    name_en,
    name_de,
    content_ua,
    content_en,
    content_de,
    gallery,
  } = req.body;

  const query = `
    INSERT INTO activities (canton, city, photo, name_ua, name_en, name_de, content_ua, content_en, content_de, gallery)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [
    canton,
    city,
    photo,
    name_ua,
    name_en,
    name_de,
    content_ua,
    content_en,
    content_de,
    JSON.stringify(gallery), // Сохраняем галерею как JSON
  ];

  db.run(query, params, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка создания активности' });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

// Обновление данных активности
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const {
    canton,
    city,
    photo,
    name_ua,
    name_en,
    name_de,
    content_ua,
    content_en,
    content_de,
    gallery,
  } = req.body;

  const query = `
    UPDATE activities
    SET canton = ?, city = ?, photo = ?, name_ua = ?, name_en = ?, name_de = ?, content_ua = ?, content_en = ?, content_de = ?, gallery = ?
    WHERE id = ?
  `;
  const params = [
    canton,
    city,
    photo,
    name_ua,
    name_en,
    name_de,
    content_ua,
    content_en,
    content_de,
    JSON.stringify(gallery), // Сохраняем галерею как JSON
    id,
  ];

  db.run(query, params, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка обновления активности' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Активность не найдена' });
    } else {
      res.json({ message: 'Данные активности обновлены' });
    }
  });
});

// Удаление активности
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM activities WHERE id = ?', [id], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка удаления активности' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Активность не найдена' });
    } else {
      res.json({ message: 'Активность удалена' });
    }
  });
});

module.exports = router;
