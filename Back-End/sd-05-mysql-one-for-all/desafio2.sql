CREATE VIEW estatisticas_musicais AS
SELECT COUNT(a.cancao) AS `cancoes`,
(SELECT COUNT(*) FROM SpotifyClone.artista) AS `artistas`,
(SELECT COUNT(*) FROM SpotifyClone.album) AS `albuns` FROM SpotifyClone.cancoes AS a;
