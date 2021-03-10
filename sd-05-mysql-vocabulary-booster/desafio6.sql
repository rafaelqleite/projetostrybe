SELECT CONCAT(b.first_name, ' ', b.last_name) AS `Nome completo`,
c.job_title AS `Cargo`,
a.start_date AS `Data de início do cargo`,
d.department_name AS `Departamento`
FROM hr.job_history AS a 
INNER JOIN hr.employees AS b
INNER JOIN hr.jobs AS c ON c.job_id = a.job_id
INNER JOIN hr.departments AS d ON d.department_id = a.department_id
WHERE a.employee_id = b.employee_id
ORDER BY `Nome completo` DESC, `Cargo` ASC;
