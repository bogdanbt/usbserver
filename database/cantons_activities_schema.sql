-- Таблица "Кантоны"
CREATE TABLE IF NOT EXISTS cantons (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  photo TEXT NOT NULL,
  name_ua TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_de TEXT NOT NULL,
  content_ua TEXT NOT NULL,
  content_en TEXT NOT NULL,
  content_de TEXT NOT NULL,
  contact_name_ua TEXT NOT NULL,
  contact_name_en TEXT NOT NULL,
  contact_name_de TEXT NOT NULL,
  contact_email TEXT NOT NULL,
  contact_phone TEXT NOT NULL
);

-- Таблица "Активности"
CREATE TABLE IF NOT EXISTS activities (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  canton TEXT NOT NULL,
  city TEXT NOT NULL,
  photo TEXT NOT NULL,
  name_ua TEXT NOT NULL,
  name_en TEXT NOT NULL,
  name_de TEXT NOT NULL,
  content_ua TEXT NOT NULL,
  content_en TEXT NOT NULL,
  content_de TEXT NOT NULL,
  gallery TEXT NOT NULL
);