-- USE hr;
DELIMITER $$
CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email_entrada VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE totalEmpregos INT;
DECLARE auxiliar INT;
SELECT employee_id INTO auxiliar FROM hr.employees WHERE email = email_entrada;
SELECT COUNT(employee_id) INTO totalEmpregos FROM hr.job_history WHERE employee_id = auxiliar;
RETURN totalEmpregos;
END $$
DELIMITER ;
-- SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR');
