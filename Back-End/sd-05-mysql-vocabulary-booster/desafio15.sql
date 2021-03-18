DELIMITER $$
CREATE PROCEDURE buscar_media_por_cargo(IN nomeDoCargo VARCHAR(100))
BEGIN
DECLARE auxiliar VARCHAR(100);
SELECT job_id INTO auxiliar FROM hr.jobs WHERE job_title = nomeDoCargo;
SELECT ROUND(AVG(salary), 2) AS 'Média salarial' FROM hr.employees WHERE job_id = auxiliar;
END $$ 
DELIMITER ;
