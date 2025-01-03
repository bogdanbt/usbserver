
// // // module.exports = router;
// // const express = require('express');
// // const router = express.Router();
// // const sqlite3 = require('sqlite3').verbose();
// // const path = require('path');

// // // Подключение базы данных новостей
// // const newsDb = new sqlite3.Database(path.resolve(__dirname, '../database/news.db'), (err) => {
// //   if (err) {
// //     console.error('Ошибка подключения к базе данных новостей:', err);
// //   } else {
// //     console.log('База данных новостей подключена.');
// //   }
// // });

// // // Получение всех новостей
// // router.get('/', (req, res) => {
// //   newsDb.all('SELECT * FROM news ORDER BY date DESC', [], (err, rows) => {
// //     if (err) {
// //       console.error('Ошибка получения новостей:', err);
// //       res.status(500).json({ error: 'Ошибка получения новостей' });
// //     } else {
// //       res.json(rows);
// //     }
// //   });
// // });

// // // Получение одной новости по ID
// // router.get('/:id', (req, res) => {
// //   const { id } = req.params;
// //   newsDb.get('SELECT * FROM news WHERE id = ?', [id], (err, row) => {
// //     if (err) {
// //       console.error('Ошибка получения новости:', err);
// //       res.status(500).json({ error: 'Ошибка получения новости' });
// //     } else if (!row) {
// //       res.status(404).json({ error: 'Новость не найдена' });
// //     } else {
// //       res.json(row);
// //     }
// //   });
// // });

// // // Добавление новости
// // router.post('/', (req, res) => {
// //   const { title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status } = req.body;
// //   newsDb.run(
// //     'INSERT INTO news (title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
// //     [title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status],
// //     function (err) {
// //       if (err) {
// //         console.error('Ошибка добавления новости:', err);
// //         res.status(500).json({ error: 'Ошибка добавления новости' });
// //       } else {
// //         res.status(201).json({ id: this.lastID });
// //       }
// //     }
// //   );
// // });

// // // Обновление новости
// // // router.put('/:id', (req, res) => {
// // //   const { id } = req.params;
// // //   const { title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status } = req.body;
// // //   // Проверка существования записи с указанным ID
// // //    // Проверка на заполненность обязательных полей
  
  
// // //   newsDb.run(
// // //     'UPDATE news SET title_en = ?, title_ua = ?, title_de = ?, content_en = ?, content_ua = ?, content_de = ?, image = ?, date = ?, status = ? WHERE id = ?',
// // //     [title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, id],
// // //     function (err) {
// // //       if (err) {
// // //         console.error('Ошибка обновления новости:', err);
// // //         res.status(500).json({ error: 'Ошибка обновления новости' });
// // //       } else {
// // //         res.json({ message: 'Новость успешно обновлена' });
// // //       }
// // //     }
// // //   );
// // // });

// // router.put('/:id', (req, res) => {
// //   const { id } = req.params;
// //   const { title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status } = req.body;

// //   // Проверка на заполненность обязательных полей
// //   if (!title_en || !title_ua || !title_de || !content_en || !content_ua || !content_de || !image || !date || !status) {
// //     return res.status(400).json({ error: 'Все поля должны быть заполнены' });
// //   }

// //   // Проверка существования записи с указанным ID
// //   newsDb.get('SELECT id FROM news WHERE id = ?', [id], (err, row) => {
// //     if (err) {
// //       console.error('Ошибка при проверке новости:', err);
// //       return res.status(500).json({ error: 'Ошибка при проверке новости' });
// //     }

// //     if (!row) {
// //       return res.status(404).json({ error: 'Новость не найдена' });
// //     }

// //     // Выполнение обновления новости
// //     newsDb.run(
// //       'UPDATE news SET title_en = ?, title_ua = ?, title_de = ?, content_en = ?, content_ua = ?, content_de = ?, image = ?, date = ?, status = ? WHERE id = ?',
// //       [title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, id],
// //       function (err) {
// //         if (err) {
// //           console.error('Ошибка обновления новости:', err);
// //           return res.status(500).json({ error: 'Ошибка обновления новости' });
// //         }

// //         res.json({ message: 'Новость успешно обновлена' });
// //       }
// //     );
// //   });
// // });


// // // // Удаление новости
// // // router.delete('/:id', (req, res) => {
// // //   const { id } = req.params;
// // //   db.run('DELETE FROM news WHERE id = ?', [id], function (err) {
// // //     if (err) {
// // //       console.error('Ошибка удаления новости:', err);
// // //       res.status(500).json({ error: 'Ошибка удаления новости' });
// // //     } else {
// // //       res.json({ message: 'Новость успешно удалена' });
// // //     }
// // //   });
// // // });

// // module.exports = router;
// const express = require('express');
// const router = express.Router();
// const sqlite3 = require('sqlite3').verbose();
// const path = require('path');

// // Подключение базы данных новостей
// const newsDb = new sqlite3.Database(path.resolve(__dirname, '../database/news.db'), (err) => {
//   if (err) {
//     console.error('Ошибка подключения к базе данных новостей:', err);
//   } else {
//     console.log('База данных новостей подключена.');
//   }
// });

// // Получение всех новостей
// router.get('/', (req, res) => {
//   newsDb.all('SELECT * FROM news ORDER BY date DESC', [], (err, rows) => {
//     if (err) {
//       console.error('Ошибка получения новостей:', err);
//       res.status(500).json({ error: 'Ошибка получения новостей' });
//     } else {
//       res.json(rows);
//     }
//   });
// });

// // Получение одной новости по ID
// router.get('/:id', (req, res) => {
//   const { id } = req.params;
//   newsDb.get('SELECT * FROM news WHERE id = ?', [id], (err, row) => {
//     if (err) {
//       console.error('Ошибка получения новости:', err);
//       res.status(500).json({ error: 'Ошибка получения новости' });
//     } else if (!row) {
//       res.status(404).json({ error: 'Новость не найдена' });
//     } else {
//       res.json(row);
//     }
//   });
// });

// // Добавление новости
// router.post('/', (req, res) => {
//   const { title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic } = req.body;

//   if (!title_en || !title_ua || !title_de || !content_en || !content_ua || !content_de || !image || !date || !status || !topic) {
//     return res.status(400).json({ error: 'Все поля должны быть заполнены' });
//   }

//   newsDb.run(
//     'INSERT INTO news (title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
//     [title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic],
//     function (err) {
//       if (err) {
//         console.error('Ошибка добавления новости:', err);
//         res.status(500).json({ error: 'Ошибка добавления новости' });
//       } else {
//         res.status(201).json({ id: this.lastID });
//       }
//     }
//   );
// });

// // Обновление новости
// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const { title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic } = req.body;

//   if (!title_en || !title_ua || !title_de || !content_en || !content_ua || !content_de || !image || !date || !status || !topic) {
//     return res.status(400).json({ error: 'Все поля должны быть заполнены' });
//   }

//   newsDb.get('SELECT id FROM news WHERE id = ?', [id], (err, row) => {
//     if (err) {
//       console.error('Ошибка при проверке новости:', err);
//       return res.status(500).json({ error: 'Ошибка при проверке новости' });
//     }

//     if (!row) {
//       return res.status(404).json({ error: 'Новость не найдена' });
//     }

//     newsDb.run(
//       'UPDATE news SET title_en = ?, title_ua = ?, title_de = ?, content_en = ?, content_ua = ?, content_de = ?, image = ?, date = ?, status = ?, topic = ? WHERE id = ?',
//       [title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic, id],
//       function (err) {
//         if (err) {
//           console.error('Ошибка обновления новости:', err);
//           return res.status(500).json({ error: 'Ошибка обновления новости' });
//         }

//         res.json({ message: 'Новость успешно обновлена' });
//       }
//     );
//   });
// });

// // Удаление новости
// router.delete('/:id', (req, res) => {
//   const { id } = req.params;
//   newsDb.run('DELETE FROM news WHERE id = ?', [id], function (err) {
//     if (err) {
//       console.error('Ошибка удаления новости:', err);
//       res.status(500).json({ error: 'Ошибка удаления новости' });
//     } else if (this.changes === 0) {
//       res.status(404).json({ error: 'Новость не найдена' });
//     } else {
//       res.json({ message: 'Новость успешно удалена' });
//     }
//   });
// });

// module.exports = router;
// module.exports = router;
const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Подключение базы данных новостей
const newsDb = new sqlite3.Database(path.resolve(__dirname, '../database/news.db'), (err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных новостей:', err);
  } else {
    console.log('База данных новостей подключена.');
  }
});

// Получение всех новостей с поддержкой фильтров
router.get('/', (req, res) => {
  const { _sort = 'date', _order = 'DESC', _limit, topic } = req.query;

  // Базовый запрос
  let query = 'SELECT * FROM news';
  const params = [];

  // Фильтр по теме
  if (topic) {
    query += ' WHERE topic = ?';
    params.push(topic);
  }

  // Сортировка
  query += ` ORDER BY ${_sort} ${_order.toUpperCase()}`;

  // Лимит
  if (_limit) {
    query += ' LIMIT ?';
    params.push(parseInt(_limit, 10));
  }

  // Выполнение запроса
  newsDb.all(query, params, (err, rows) => {
    if (err) {
      console.error('Ошибка получения новостей:', err);
      res.status(500).json({ error: 'Ошибка получения новостей' });
    } else {
      res.json(rows);
    }
  });
});

// Получение одной новости по ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  newsDb.get('SELECT * FROM news WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error('Ошибка получения новости:', err);
      res.status(500).json({ error: 'Ошибка получения новости' });
    } else if (!row) {
      res.status(404).json({ error: 'Новость не найдена' });
    } else {
      res.json(row);
    }
  });
});

// Добавление новости
router.post('/', (req, res) => {
  const { title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic } = req.body;

  if (!title_en || !title_ua || !title_de || !content_en || !content_ua || !content_de || !image || !date || !status || !topic) {
    return res.status(400).json({ error: 'Все поля должны быть заполнены' });
  }

  newsDb.run(
    'INSERT INTO news (title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
    [title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic],
    function (err) {
      if (err) {
        console.error('Ошибка добавления новости:', err);
        res.status(500).json({ error: 'Ошибка добавления новости' });
      } else {
        res.status(201).json({ id: this.lastID });
      }
    }
  );
});

// Обновление новости
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic } = req.body;

  if (!title_en || !title_ua || !title_de || !content_en || !content_ua || !content_de || !image || !date || !status || !topic) {
    return res.status(400).json({ error: 'Все поля должны быть заполнены' });
  }

  newsDb.get('SELECT id FROM news WHERE id = ?', [id], (err, row) => {
    if (err) {
      console.error('Ошибка при проверке новости:', err);
      return res.status(500).json({ error: 'Ошибка при проверке новости' });
    }

    if (!row) {
      return res.status(404).json({ error: 'Новость не найдена' });
    }

    newsDb.run(
      'UPDATE news SET title_en = ?, title_ua = ?, title_de = ?, content_en = ?, content_ua = ?, content_de = ?, image = ?, date = ?, status = ?, topic = ? WHERE id = ?',
      [title_en, title_ua, title_de, content_en, content_ua, content_de, image, date, status, topic, id],
      function (err) {
        if (err) {
          console.error('Ошибка обновления новости:', err);
          return res.status(500).json({ error: 'Ошибка обновления новости' });
        }

        res.json({ message: 'Новость успешно обновлена' });
      }
    );
  });
});

// Удаление новости
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  newsDb.run('DELETE FROM news WHERE id = ?', [id], function (err) {
    if (err) {
      console.error('Ошибка удаления новости:', err);
      res.status(500).json({ error: 'Ошибка удаления новости' });
    } else if (this.changes === 0) {
      res.status(404).json({ error: 'Новость не найдена' });
    } else {
      res.json({ message: 'Новость успешно удалена' });
    }
  });
});

module.exports = router;
