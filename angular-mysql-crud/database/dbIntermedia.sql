USE ng_publications_db;

CREATE TABLE intermedia(
    id INT(9) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_carne INT(9) NOT NULL,
    id_curso INT(9) NOT NULL
);

DESCRIBE intermedia;