CREATE TABLE IF NOT EXISTS news (
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- Уникальный идентификатор
    title_en TEXT NOT NULL,               -- Заголовок на английском
    title_ua TEXT NOT NULL,               -- Заголовок на украинском
    title_de TEXT NOT NULL,               -- Заголовок на немецком
    content_en TEXT NOT NULL,             -- Текст новости на английском
    content_ua TEXT NOT NULL,             -- Текст новости на украинском
    content_de TEXT NOT NULL,             -- Текст новости на немецком
    image TEXT,                           -- URL изображения
    date TEXT NOT NULL                    -- Дата публикации
);


