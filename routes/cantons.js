// const express = require('express');
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// const router = express.Router();
// const dbPath = path.resolve(__dirname, '../database/activities.db');
// const db = new sqlite3.Database(dbPath);

// // Получение списка всех кантонов
// router.get('/', (req, res) => {
//   db.all('SELECT * FROM cantons', [], (err, rows) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ error: 'Ошибка получения списка кантонов' });
//     } else {
//       res.json(rows);
//     }
//   });
// });

// // Получение деталей одного кантона
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   db.get('SELECT * FROM cantons WHERE id = ?', [id], (err, row) => {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ error: 'Ошибка получения данных кантона' });
//     } else if (!row) {
//       res.status(404).json({ error: 'Кантон не найден' });
//     } else {
//       res.json(row);
//     }
//   });
// });

// // Создание нового кантона
// router.post('/', (req, res) => {
//   const {
//     photo,
//     name_ua,
//     name_en,
//     name_de,
//     content_ua,
//     content_en,
//     content_de,
//     contact_name_ua,
//     contact_name_en,
//     contact_name_de,
//     contact_email,
//     contact_phone,
//   } = req.body;

//   const query = `
//     INSERT INTO cantons (photo, name_ua, name_en, name_de, content_ua, content_en, content_de, contact_name_ua, contact_name_en, contact_name_de, contact_email, contact_phone)
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//   `;
//   const params = [photo, name_ua, name_en, name_de, content_ua, content_en, content_de, contact_name_ua, contact_name_en, contact_name_de, contact_email, contact_phone];

//   db.run(query, params, function (err) {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ error: 'Ошибка создания кантона' });
//     } else {
//       res.status(201).json({ id: this.lastID });
//     }
//   });
// });

// // Обновление данных о кантоне
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const {
//     photo,
//     name_ua,
//     name_en,
//     name_de,
//     content_ua,
//     content_en,
//     content_de,
//     contact_name_ua,
//     contact_name_en,
//     contact_name_de,
//     contact_email,
//     contact_phone,
//   } = req.body;

//   const query = `
//     UPDATE cantons
//     SET photo = ?, name_ua = ?, name_en = ?, name_de = ?, content_ua = ?, content_en = ?, content_de = ?, contact_name_ua = ?, contact_name_en = ?, contact_name_de = ?, contact_email = ?, contact_phone = ?
//     WHERE id = ?
//   `;
//   const params = [photo, name_ua, name_en, name_de, content_ua, content_en, content_de, contact_name_ua, contact_name_en, contact_name_de, contact_email, contact_phone, id];

//   db.run(query, params, function (err) {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ error: 'Ошибка обновления данных кантона' });
//     } else if (this.changes === 0) {
//       res.status(404).json({ error: 'Кантон не найден' });
//     } else {
//       res.json({ message: 'Данные кантона обновлены' });
//     }
//   });
// });

// // Удаление кантона
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   db.run('DELETE FROM cantons WHERE id = ?', [id], function (err) {
//     if (err) {
//       console.error(err.message);
//       res.status(500).json({ error: 'Ошибка удаления кантона' });
//     } else if (this.changes === 0) {
//       res.status(404).json({ error: 'Кантон не найден' });
//     } else {
//       res.json({ message: 'Кантон удалён' });
//     }
//   });
// });

// module.exports = router;
const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const router = express.Router();
const dbPath = path.resolve(__dirname, '../database/activities.db');
const db = new sqlite3.Database(dbPath);

// Получение списка всех кантонов
router.get('/', (req, res) => {
  db.all('SELECT * FROM cantons', [], (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка получения списка кантонов' });
    } else {
      res.json(rows);
    }
  });
});

// Получение деталей одного кантона
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM cantons WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка получения данных кантона' });
    } else if (!row) {
      res.status(404).json({ error: 'Кантон не найден' });
    } else {
      res.json(row);
    }
  });
});

// Создание нового кантона
router.post('/', (req, res) => {
  const {
    canton,
    photo,
    name_ua,
    name_en,
    name_de,
    content_ua,
    content_en,
    content_de,
    contact_name_ua,
    contact_name_en,
    contact_name_de,
    contact_email,
    contact_phone,
  } = req.body;

  const query = `
    INSERT INTO cantons (canton, photo, name_ua, name_en, name_de, content_ua, content_en, content_de, contact_name_ua, contact_name_en, contact_name_de, contact_email, contact_phone)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [canton, photo, name_ua, name_en, name_de, content_ua, content_en, content_de, contact_name_ua, contact_name_en, contact_name_de, contact_email, contact_phone];

  db.run(query, params, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка создания кантона' });
    } else {
      res.status(201).json({ id: this.lastID });
    }
  });
});

// Обновление данных о кантоне
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const {
    canton,
    photo,
    name_ua,
    name_en,
    name_de,
    content_ua,
    content_en,
    content_de,
    contact_name_ua,
    contact_name_en,
    contact_name_de,
    contact_email,
    contact_phone,
  } = req.body;

  const query = `
    UPDATE cantons
    SET canton = ?, photo = ?, name_ua = ?, name_en = ?, name_de = ?, content_ua = ?, content_en = ?, content_de = ?, contact_name_ua = ?, contact_name_en = ?, contact_name_de = ?, contact_email = ?, contact_phone = ?
    WHERE id = ?
  `;
  const params = [canton, photo, name_ua, name_en, name_de, content_ua, content_en, content_de, contact_name_ua, contact_name_en, contact_name_de, contact_email, contact_phone, id];

  db.run(query, params, function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка обновления данных кантона' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Кантон не найден' });
    } else {
      res.json({ message: 'Данные кантона обновлены' });
    }
  });
});

// Удаление кантона
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM cantons WHERE id = ?', [id], function (err) {
    if (err) {
      console.error(err.message);
      res.status(500).json({ error: 'Ошибка удаления кантона' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Кантон не найден' });
    } else {
      res.json({ message: 'Кантон удалён' });
    }
  });
});

module.exports = router;
