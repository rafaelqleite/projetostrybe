CREATE VIEW perfil_artistas AS
SELECT b.artista, a.album,
COUNT(c.seguindo_artistas) AS `seguidores` FROM SpotifyClone.album AS a
INNER JOIN SpotifyClone.artista AS b ON a.artista_id = b.artista_id
INNER JOIN SpotifyClone.seguindo AS c ON a.artista_id = c.seguindo_artistas
GROUP BY album
ORDER BY `seguidores` DESC, b.artista, a.album;
