SELECT b.ContactName AS `Nome de contato`,
c.ShipperName AS `Empresa que fez o envio`,
a.OrderDate AS `Data do pedido`
FROM w3schools.orders AS a
INNER JOIN w3schools.customers AS b ON a.CustomerID = b.CustomerID
INNER JOIN w3schools.shippers AS c ON a.ShipperID = c.ShipperID
WHERE a.ShipperID IN (1, 2)
ORDER BY b.ContactName, c.ShipperName, `Data do pedido`;
