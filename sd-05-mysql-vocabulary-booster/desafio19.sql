-- USE hr;

DELIMITER $$
CREATE PROCEDURE exibir_historico_completo_por_funcionario(IN email_entrada VARCHAR(100))
BEGIN
DECLARE auxEmployee_id INT;
SELECT employee_id INTO auxEmployee_id FROM hr.employees WHERE email = email_entrada;
SELECT CONCAT(b.first_name, ' ', b.last_name) AS `Nome completo`,
c.department_name AS `Departamento`,
d.job_title AS `Cargo`
FROM hr.job_history AS a
INNER JOIN hr.employees AS b ON b.employee_id = auxEmployee_id
INNER JOIN hr.departments AS c ON c.department_id = a.department_id
INNER JOIN hr.jobs AS d ON d.job_id = a.job_id
WHERE a.employee_id = auxEmployee_id
ORDER BY `Departamento`, `Cargo`;
END $$
DELIMITER ;

-- CALL exibir_historico_completo_por_funcionario('NKOCHHAR');
-- CALL exibir_historico_completo_por_funcionario('JTAYLOR');
