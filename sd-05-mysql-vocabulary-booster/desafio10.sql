SELECT * FROM (SELECT a.ProductName AS `Produto`,
MIN(b.Quantity) AS `Mínima`,
MAX(b.Quantity) AS `Máxima`,
ROUND(AVG(b.Quantity), 2) AS `Média` from w3schools.products AS a
INNER JOIN w3schools.order_details as b ON a.ProductID = b.ProductId
GROUP BY a.ProductName ORDER BY `Média`, `Produto`) AS filtered
WHERE `Média` > 20;
