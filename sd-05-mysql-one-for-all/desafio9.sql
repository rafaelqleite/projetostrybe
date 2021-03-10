USE SpotifyClone;

DELIMITER $$
CREATE PROCEDURE albuns_do_artista(IN entrada VARCHAR(50))
BEGIN
SELECT a.artista, b.album FROM SpotifyClone.artista AS a
INNER JOIN SpotifyClone.album as b ON b.artista_id = a.artista_id 
WHERE a.artista = entrada;
END $$
DELIMITER ;

CALL albuns_do_artista ('Walter Phoenix');
