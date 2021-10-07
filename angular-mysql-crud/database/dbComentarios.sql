USE ng_publications_db;

CREATE TABLE comentarios(
    id INT(9) AUTO_INCREMENT NOT NULL PRIMARY KEY,
    id_carne INT(9) NOT NULL,
    id_publicacion INT(9) NOT NULL,
    comentario VARCHAR(500)
);

DESCRIBE comentarios;