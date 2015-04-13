DROP TABLE IF EXISTS posts; CREATE TABLE posts ( id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT, imageUrl TEXT, updated_at REAL);
CREATE TRIGGER timestamp_update BEFORE UPDATE ON posts BEGIN UPDATE posts SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id; END;

DROP TABLE IF EXISTS comments; CREATE TABLE comments ( id INTEGER PRIMARY KEY AUTOINCREMENT, tag TEXT, body TEXT, author TEXT, postID INTEGER, updated_at REAL);
CREATE TRIGGER timestamp_update BEFORE UPDATE ON comments BEGIN UPDATE comments SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id; END;