SELECT UPPER(CONCAT(b.first_name, ' ', b.last_name)) AS `Nome completo`,
a.start_date AS `Data de início`,
b.salary AS `Salário`
FROM hr.job_history AS a 
INNER JOIN hr.employees AS b
INNER JOIN hr.jobs AS c ON c.job_id = a.job_id
WHERE a.employee_id = b.employee_id AND MONTH(a.start_date) IN (1, 02, 03)
ORDER BY `Nome completo`, a.start_date;
