CREATE VIEW top_3_artistas AS
SELECT b.artista, COUNT(a.seguindo_artistas) AS `seguidores` FROM SpotifyClone.seguindo AS a
INNER JOIN SpotifyClone.artista AS b ON b.artista_id = a.seguindo_artistas
GROUP BY a.seguindo_artistas
ORDER BY `seguidores` DESC, b.artista
LIMIT 3;
