CREATE VIEW cancoes_premium AS
SELECT a.cancao AS `nome`, COUNT(a.cancao) AS `reproducoes` FROM SpotifyClone.cancoes AS a
INNER JOIN SpotifyClone.historico AS b ON b.historico_de_reproducoes = a.cancao_id
INNER JOIN SpotifyClone.usuarios AS c ON b.usuario_id = c.usuario_id
WHERE c.plano_id = 2 OR c.plano_id = 3
GROUP BY a.cancao
ORDER BY `nome`;
