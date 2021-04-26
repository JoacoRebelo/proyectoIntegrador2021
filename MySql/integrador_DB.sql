CREATE SCHEMA 'integrador_DB';
USE 'integrador_DB';

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(100),
fecha_nac DATE,
edad TINYINT
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(200),
usuario_id INT,
url VARCHAR(500),
fecha_creacion DATE,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT,
producto_id INT,
comentario VARCHAR(300),
fecha_comentario DATE,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id)
);

INSERT INTO usuarios (nombre, fecha_nac, edad) VALUES ('Jonah Hill', '1983-12-20', '37');
INSERT INTO usuarios (nombre, fecha_nac, edad) VALUES ('Michaerl Cera', '1988-7-7', '32');
INSERT INTO usuarios (nombre, fecha_nac, edad) VALUES ('Seth Rogen', '1982-4-15', '39');
INSERT INTO usuarios (nombre, fecha_nac, edad) VALUES ('Christopher Mintz-Plasse', '1989-6-20', '31');
INSERT INTO usuarios (nombre, fecha_nac, edad) VALUES ('Dave Franco', '1985-6-12', '35');

SELECT * FROM usuarios;

INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Nike Air Joran 1 Mid Red', 1,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' ,'2021_04_21');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Adidas Yeezy 350 Zebra', 3,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_22');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Dr.Martens Black', 5,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_23');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Adidas Ojotas Adilette Black', 4, 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' ,'2021_04_24');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Vans Old Skool', 2,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_25');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Converse Chuck Taylor All-Star', 4,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_26');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Botines Nike Superfly 7 Blue', 3,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_26');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Alpargatas Stripes', 2,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_27');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Nike Air Joran 1 Mid Red', 1,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_28');
INSERT INTO productos (nombre, usuario_id, url, fecha_creacion) VALUES ('Adidas Yeezy 350 Zebra', 2,'https://www.google.com/imgres?imgurl=https%3A%2F%2Fassets.adidas.com%2Fimages%2Fw_600%2Cf_auto%2Cq_auto%2F7e03ecef81a64126bcecab58011051d8_9366%2FZapatillas_Superstar_Bold_Mujer_Blanco_FV3336_01_standard.jpg&imgrefurl=https%3A%2F%2Fwww.adidas.com.ar%2Fzapatillas-superstar-bold-mujer%2FFV3336.html&tbnid=Owe4MAQr14tRlM&vet=12ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg..i&docid=JpoLlOD2t-R7HM&w=600&h=600&q=zapatillas&safe=active&client=safari&ved=2ahUKEwiD8-mMi5LwAhXKrpUCHeXNBo0QMygAegUIARDdAg' , '2021_04_29');

SELECT * FROM productos;

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,1,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,1,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,1,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,1,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,2,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,2,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,2,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,2,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,3,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,3,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,3,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,3,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,4,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,4,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,4,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,4,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,5,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,5,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,5,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,5,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,6,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,6,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,6,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,6,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,7,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,7,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,7,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,7,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,8,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,8,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,8,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,8,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,9,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,9,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,9,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,9,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (1,10,'Las <%= zapatillas.nombre %> son las mejores zapatillas del mundo','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (2,10,'No me saco mas las <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (3,10,'Take my money, just give me the <%= zapatillas.nombre %>','2021_04_03');
INSERT INTO comentarios (usuario_id,producto_id,comentario,fecha_comentario) VALUES (4,10,'Juro tener 21 para comprar las <%= zapatillas.nombre %>','2021_04_03');

SELECT * FROM comentarios;