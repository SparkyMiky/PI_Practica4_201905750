USE ng_publications_db;

CREATE TABLE users(
    id INT(9) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    carne INT(9) NOT NULL,
    nombres VARCHAR(180) ,
    apellidos varchar(180),
    password VARCHAR(180),
    correo VARCHAR(500)
);

DESCRIBE users;