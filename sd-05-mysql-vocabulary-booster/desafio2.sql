SELECT job_title AS 'Cargo',
CASE
WHEN MAX(max_salary) BETWEEN 5000 AND 10000 THEN 'Baixo'
WHEN MAX(max_salary) BETWEEN 10001 AND 20000 THEN 'Médio'
WHEN MAX(max_salary) BETWEEN 20001 AND 30000 THEN 'Alto'
WHEN MAX(max_salary) > 30000 THEN 'Altíssimo'
END AS 'Nível' FROM hr.jobs GROUP BY job_title;
