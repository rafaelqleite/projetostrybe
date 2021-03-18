CREATE VIEW top_2_hits_do_momento AS
SELECT b.cancao,
COUNT(historico_de_reproducoes) AS `reproducoes` FROM SpotifyClone.historico AS a
INNER JOIN SpotifyClone.cancoes AS b ON a.historico_de_reproducoes = b.cancao_id
GROUP BY historico_de_reproducoes
ORDER BY `reproducoes` DESC, b.cancao
LIMIT 2;
