CREATE VIEW faturamento_atual AS
SELECT MIN(valor_plano) AS `faturamento_minimo`,
MAX(valor_plano) AS `faturamento_maximo`,
ROUND(SUM(valor_plano)/(SELECT COUNT(*) FROM SpotifyClone.usuarios), 2) AS `faturamento_medio`,
SUM(valor_plano) AS `faturamento_total` FROM SpotifyClone.planos;
