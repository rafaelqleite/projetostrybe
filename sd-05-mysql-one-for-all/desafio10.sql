USE SpotifyClone;

DELIMITER $$
CREATE FUNCTION quantidade_musicas_no_historico(id_entrada SMALLINT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE saida SMALLINT;
SELECT COUNT(historico_de_reproducoes) FROM SpotifyClone.historico WHERE usuario_id = id_entrada INTO saida;
RETURN saida;
END $$
DELIMITER ;

SELECT quantidade_musicas_no_historico(3);
