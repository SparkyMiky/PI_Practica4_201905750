CREATE DATABASE ng_publications_db;

USE ng_publications_db;

CREATE TABLE publications(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    user VARCHAR(180) ,
    title VARCHAR(180),
    description VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP 

);

DESCRIBE publications;