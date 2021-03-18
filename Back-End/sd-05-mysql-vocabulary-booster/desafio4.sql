SELECT b.job_title AS 'Cargo', ROUND(AVG(a.salary),2) AS 'Média salarial',
CASE
WHEN ROUND(AVG(a.salary),2) BETWEEN 2000 AND 5800 THEN 'Júnior'
WHEN ROUND(AVG(a.salary),2) BETWEEN 5801 AND 7500 THEN 'Pleno'
WHEN ROUND(AVG(a.salary),2) BETWEEN 7501 AND 10500 THEN 'Sênior'
WHEN ROUND(AVG(a.salary),2) > 10500 THEN 'CEO'
END AS 'Senioridade' FROM hr.employees AS a
INNER JOIN hr.jobs AS b ON a.job_id = b.job_id GROUP BY b.job_title ORDER BY ROUND(AVG(a.salary),2), b.job_title;
