-- Добавяне на запис в таблица
INSERT INTO notes (note) VALUES ("Отиди на пазар");

-- Взимане на всички резултати от дадена таблица
SELECT * FROM notes;
SELECT * FROM notes ORDER BY id ASC; -- подредено по id във възходящ ред

-- Взимане на конкретен резултат от дадена таблица
SELECT * FROM notes WHERE id = 2;

-- Изтриване на определен запис от дадена таблица
DELETE FROM notes WHERE id = 2;

-- Променяне на стойноста на определена колона за даден запис
UPDATE notes SET note = "Нова бележка" WHERE id = 3;