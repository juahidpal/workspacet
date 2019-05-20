--
-- Creacion de la BBDD
--
DROP DATABASE IF EXISTS notasfast;
CREATE DATABASE notasfast;
GRANT ALL ON DATABASE notasfast TO dit;

--
-- Conexión con la BBDD
--
\c notasfast;

--
-- Estructura de tabla para la tabla `usuarios`
--
DROP TABLE IF EXISTS usuarios CASCADE;
CREATE TABLE IF NOT EXISTS usuarios (
  nombre VARCHAR( 20 ) NOT NULL PRIMARY KEY,
  clave VARCHAR( 100 ) NOT NULL,
  tipo_usu integer NOT NULL
);

--
-- Estructura de tabla para la tabla `notas`
--
DROP TABLE IF EXISTS notas;
CREATE TABLE IF NOT EXISTS notas (
  id SERIAL NOT NULL,
  nombre_usuario VARCHAR(20) NOT NULL,
  titulo VARCHAR(100) NOT NULL,
  nota TEXT,
  urlimagen TEXT,
  categoria VARCHAR(20),
  color VARCHAR(20),
  PRIMARY KEY (id),
  FOREIGN KEY (nombre_usuario) REFERENCES usuarios (nombre) ON DELETE CASCADE ON UPDATE CASCADE
) ;

--
-- Insercion de datos de ejemplo
--
INSERT INTO usuarios VALUES('usuario','clave',1);
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('usuario','Nota de prueba 1','Esta es la nota 1','../imagenes/nota.png','FAST','DARKSIDE');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('usuario','Nota de prueba 2','Esta es la nota 2','../imagenes/nota2.png','FAST','DARKSIDE');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('usuario','Nota de prueba 3','Esta es la nota 3','../imagenes/nota2.png','FAST','DARKSIDE');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('usuario','Nota de prueba 4','Esta es la nota 4','../imagenes/nota2.png','FAST','DARKSIDE');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('usuario','Nota de prueba 5','Esta es la nota 5','../imagenes/nota2.png','FAST','DARKSIDE');
INSERT INTO usuarios VALUES('admin','clave',0);
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('admin','Nota de prueba 6','Esta es la nota 6','../imagenes/nota2.png','FASTadmin','WHITESIDE');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('admin','Nota de Leo','Esta es la nota de Leo','../imagenes/leo.jpg','mascota','green');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('admin','Nota de Narcy Lucero y Leo','Esta es la nota de narcyLuceroLeo','../imagenes/narcyLuceroLeo.jpg','mascota','blue');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('admin','NINO','Esta es la nota de NINO','../imagenes/nino.jpg','amiga','orange');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('admin','LINUX','Esta es la nota de LINUX','../imagenes/linux.jpg','Sistema Operativo','red');
INSERT INTO notas (nombre_usuario, titulo, nota, urlimagen,categoria,color) VALUES('admin','ROLANDO','Esta es la nota de Rolando','../imagenes/rolo.jpg','Persona','yellow');
