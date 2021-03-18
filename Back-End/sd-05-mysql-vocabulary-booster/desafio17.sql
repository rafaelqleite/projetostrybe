SELECT CONCAT(b.first_name, ' ', b.last_name) AS `Nome completo`,
CONCAT(LPAD(DAY(a.start_date), 2, 0), '/', LPAD(MONTH(a.start_date), 2, 0), '/', YEAR(a.start_date)) AS `Data de início`,
CONCAT(LPAD(DAY(a.end_date), 2, 0), '/', LPAD(MONTH(a.end_date), 2, 0), '/', YEAR(a.end_date)) AS `Data de rescisão`,
ROUND(DATEDIFF(a.end_date, a.start_date)/365, 2) AS `Anos trabalhados`
FROM hr.job_history AS a
INNER JOIN hr.employees AS b
WHERE a.employee_id = b.employee_id
ORDER BY `Nome completo`, `Anos trabalhados`;
