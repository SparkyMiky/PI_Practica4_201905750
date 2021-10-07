CREATE DATABASE ng_publications_db;

USE ng_publications_db;

CREATE TABLE publications(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    id_user int(9) NOT NULL,
    title VARCHAR(180),
    description VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 

);

DESCRIBE publications;