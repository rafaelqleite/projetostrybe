DROP DATABASE IF EXISTS SportifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE artista (
artista_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
artista VARCHAR(50) UNIQUE NOT NULL
) ENGINE = InnoDB;

CREATE TABLE planos (
plano_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
plano VARCHAR(30) UNIQUE NOT NULL,
valor_plano DECIMAL(5,2) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE usuarios (
usuario_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
usuario VARCHAR(40) NOT NULL,
idade SMALLINT NOT NULL,
plano_id SMALLINT NOT NULL,
FOREIGN KEY (plano_id) REFERENCES planos(plano_id)
) ENGINE = InnoDB;

CREATE TABLE album (
album_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
album VARCHAR(50) UNIQUE NOT NULL,
artista_id SMALLINT NOT NULL,
FOREIGN KEY (artista_id) REFERENCES artista(artista_id)
) ENGINE = InnoDB;

CREATE TABLE seguindo (
usuario_id SMALLINT NOT NULL,
seguindo_artistas SMALLINT NOT NULL,
PRIMARY KEY (usuario_id, seguindo_artistas),
FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
FOREIGN KEY (seguindo_artistas) REFERENCES artista(artista_id)
) ENGINE = InnoDB;

CREATE TABLE cancoes (
cancao_id SMALLINT PRIMARY KEY AUTO_INCREMENT,
cancao VARCHAR(50) UNIQUE NOT NULL,
album_id SMALLINT NOT NULL,
FOREIGN KEY (album_id) REFERENCES album(album_id)
) ENGINE = InnoDB;

INSERT INTO planos (plano, valor_plano) VALUES ('gratuito', 0), ('familiar', 7.99), ('universitario', 5.99);
INSERT INTO usuarios (usuario, idade, plano_id) 
VALUES ('Thati', 23, 1),
('Cintia', 35, 2),
('Bill', 20, 3),
('Roger', 45, 1);

CREATE TABLE historico (
usuario_id SMALLINT NOT NULL,
historico_de_reproducoes SMALLINT NOT NULL,
PRIMARY KEY (usuario_id, historico_de_reproducoes),
FOREIGN KEY (usuario_id) REFERENCES usuarios(usuario_id),
FOREIGN KEY (historico_de_reproducoes) REFERENCES cancoes(cancao_id)
) ENGINE = InnoDB;

INSERT INTO artista (artista) VALUES ('Walter Phoenix'), ('Peter Strong'), ('Lance Day'), ('Freedie Shannon');

INSERT INTO album (album, artista_id) VALUES ('Envious', 1), ('Exuberant', 1), ('Hallowed Steam', 2), ('Incandescent', 3), ('Temporary Culture', 4);

INSERT INTO cancoes (cancao, album_id) 
VALUES ('Soul For Us', 1),
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 1),
('Time Fireworks', 1),
('Magic Circus', 2),
("Honey, So Do I", 2),
("Sweetie', Let's Go Wild", 2),
('She Knows', 2),
('Fantasy For Me', 3),
( 'Celebration Of More', 3),
( 'Rock His Everything', 3),
('Home Forever', 3),
('Diamond Power', 3),
("Honey, Let's Be Silly", 3),
('Thang Of Thunder', 4),
('Words Of Her Life', 4),
('Without My Streets', 4);

INSERT INTO historico (usuario_id, historico_de_reproducoes)
VALUES (1, 1), (1, 6), (1, 14), (1, 16), (2, 13), (2, 17), (2, 2), (2, 15), (3, 4),
(3, 16), (3, 6), (4, 3), (4, 18), (4, 11);

INSERT INTO seguindo (usuario_id, seguindo_artistas)
VALUES (1, 1), (1, 4), (1, 3), (2, 1), (2, 3), (3, 2), (3, 1), (4, 4);

-- https://stackoverflow.com/questions/1110349/how-can-i-define-a-composite-primary-key-in-sql
