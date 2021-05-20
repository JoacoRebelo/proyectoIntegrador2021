CREATE SCHEMA 'integrador_db2';
USE 'integrador_db2';

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(500) NOT NULL,
edad TINYINT UNSIGNED,
email VARCHAR(100) NOT NULL,
fecha_nac DATE,
contrasena VARCHAR(300) NOT NULL
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(600) NOT NULL,
usuario_id INT UNSIGNED,
url VARCHAR(700) NOT NULL,
fecha_crea DATE,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED,
producto_id INT UNSIGNED,
comentario VARCHAR(700) NOT NULL,
fecha_comen DATE,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)
);

SELECT * FROM usuarios;