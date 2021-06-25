CREATE SCHEMA `integrador_db2` ;
USE `integrador_db2`;

CREATE TABLE usuarios(
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(500) NOT NULL,
seguidores TINYINT UNSIGNED,
email VARCHAR(100) UNIQUE NOT NULL,
contrasena VARCHAR(300) NOT NULL,
fecha_nac DATE NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
url VARCHAR(700)
);

CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(600) NOT NULL,
usuario_id INT UNSIGNED,
url VARCHAR(700),
descripcionLarga VARCHAR(1000),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
usuario_id INT UNSIGNED,
producto_id INT UNSIGNED,
comentario VARCHAR(700) NOT NULL,
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (usuario_id) REFERENCES usuarios(id),
FOREIGN KEY (producto_id) REFERENCES productos(id) ON DELETE CASCADE 
);


-- SELECT * FROM usuarios;
-- SELECT * FROM productos;
-- SELECT * FROM comentarios;

INSERT INTO usuarios (nombre, seguidores, email, contrasena, fecha_nac,url) VALUES ('Matias', 20 , 'matias@gmail.com', 'asfabfdbfda','1999-06-16','mati.png');
INSERT INTO usuarios (nombre, seguidores, email, contrasena, fecha_nac, url) VALUES ('Andres', 10 , 'andres@gmail.com', 'asfabfdbfda','2002-05-13', 'andy.png');
INSERT INTO usuarios (nombre, seguidores, email, contrasena, fecha_nac, url) VALUES ('Joaquin', 10 , 'joaquin@gmail.com', 'asfabfdbfda', '2000-10-20', 'joaco.png');

INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Adidas Ojotas Adilette Black',2,'adidas.jpeg','Con las Adidas Ojotas Adilette Black Relajáte después de la sesión de piscina con esta Ojotas ideales para la ducha. Su diseño sencillo muestra el auténtico legado de adidas con las emblemáticas 3 Rayas. Incorporan una mediasuela cómoda y suave que reconforta los pies cansados.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Alpargatas Stripes', 1,'alpargatas.jpeg','El clásico argentino Alpargatas Stripes con suela de yute que viene en una tela suave 100% algodón con rayas azules. Ideal para el día y la noche.Este modelo viene con refuerzo en el talón para darle más calidad y durabilidad.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Botines Nike Superfly 7 Blue', 3,'botines.jpeg','Los botines Nike Superfly 7 Academy nacieron para que te conviertas en el mejor dentro de la cancha. Un diseño exclusivo, audaz y cómodo te permitirán sentir el control y la precisión que necesitas, además de contar con un calzado liviano para cambiar tu ritmo de juego cuando lo necesites.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Adidas Yeezy 350 Zebra', 1,'yeezy350.jpeg' , 'Las Yeezy reciben el sobrenombre de Zebras y vienen en un clásico esquema de color blanco, negro y rojo. Luciendo una parte superior Primeknit de base blanca con detalles en negro que emite un ambiente de rayas Zebra, SPLY-350 se muestra en los lados en rojo rematado por una suela acolchada BOOST translúcida.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Nike Air Joran 1 Mid Red',1,'jordan.jpeg','Las zapatillas Nike Air Jordan 1 Mid Red se inspiran en las primeras AJ1 y ofrecen, a los amantes del modelo el estilo retro de Jordan, la oportunidad de seguir los pasos hacia la grandeza. Colores con mucho estilo y un mix de materiales aportan el toque de novedad a un diseño ya conocido a nivel mundial. La tecnología Air te proporciona una pisada más suave en cada paso.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Dr.Martens Black', 1,'doctormartens.jpeg' , 'La bota es la original de Dr. Martens. Su diseño es inconfundible: 8 ojales, el emblemático cuero suave Smooth de Dr. Martens, la suela con cámara de aire y surcos laterales y el pespunte amarillo.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Vans Old Skool', 1,'vans.jpg' , 'Las Old Skool son las zapatillas clásicas de Vans y el primer modelo en lucir el icónico sidestripe de la marca. Son zapatillas de corte bajo confeccionadas con capellada de canvas y cuero suede resistente, tiene punteras reforzadas para añadir durabilidad, la suela de caucho original Vans Wafflesole y cuello acolchado para ofrecer sujeción y confort.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Converse Chuck Taylor All-Star',2,'converse.jpeg','Originales desde 1917, las zapatillas Converse Chuck Taylor All Star son fácilmente identificables por su inconfundible silueta y el característico patch en el tobillo.  Nacidas en una cancha de básquet, lograron trascender la escena deportiva para ser adoptadas por aquellos espíritus creativos como símbolo de expresión individual.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Nike Air Mag',3,'mags.jpeg','Zapatillas Nike Air Mag es un relleno de Marty McFly, nuevo limited edition, en caja original, incluye cargador. Los zapatos tiene que estar en carga de 5 horas. It puede ser controlado si no desea encender las luces en los zapatos en orden para ahorrar algunos Power.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Crocs Crocband Clog',2,'crocs.jpeg','Las Crocs Crocband Clog son el modelo más buscado, más usado, más amado por nuestros fans. Quien no tiene una, dos o tres? Con colores clásicos, el zueco y banda son la combinación perfecta.Además podes personalizarlas como mas te guste con los Jibbitz™ de tus personajes favoritos, letras y numeros.');
INSERT INTO productos (nombre, usuario_id, url, descripcionLarga) VALUES ('Adidas Low Bad Bunny Pink',3,'adidasBB.jpeg','Estos Easter Egg de las Adidas Low Bad Bunny Pink apuestan por un color más claro y atrevido que va bastante con algunas siluetas que ha usado Bunny en el pasado. Siguen el diseño que ya vimos en el pasado del Forum Low, el cual es ligeramente amplio de la parte de arriba, tiene un doble detalle de suela en la parte de enfrente con distintas tonalidades del mismo color, lo cual lo hace más llamativo.');

