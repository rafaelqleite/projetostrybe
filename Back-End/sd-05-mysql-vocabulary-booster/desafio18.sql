-- USE hr;

DELIMITER $$
CREATE FUNCTION exibir_quantidade_pessoas_contratadas_por_mes_e_ano(mes INT, ano INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE auxiliar INT;
SELECT COUNT(*) INTO auxiliar FROM hr.employees WHERE MONTH(hire_date) = mes AND YEAR(hire_date) = ano;
RETURN auxiliar;
END $$
DELIMITER ;

-- SELECT exibir_quantidade_pessoas_contratadas_por_mes_e_ano(6, 1987);
