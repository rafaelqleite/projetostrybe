SELECT * FROM (SELECT a.ContactName AS `Nome`,
a.Country AS `País`,
(SELECT COUNT(Country)-1 from w3schools.customers WHERE Country = a.Country)
AS `Número de compatriotas` FROM w3schools.customers AS a
ORDER BY `Nome`) AS notFiltered
WHERE `Número de compatriotas` > 0;
