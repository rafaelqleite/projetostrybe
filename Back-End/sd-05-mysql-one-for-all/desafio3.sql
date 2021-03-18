CREATE VIEW historico_reproducao_usuarios AS
SELECT a.usuario, c.cancao AS `nome` FROM SpotifyClone.usuarios AS a
INNER JOIN SpotifyClone.historico AS b ON b.usuario_id = a.usuario_id
INNER JOIN SpotifyClone.cancoes AS c ON b.historico_de_reproducoes = c.cancao_id
ORDER BY a.usuario, `nome`;
