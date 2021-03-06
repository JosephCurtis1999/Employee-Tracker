-- using the employee database
USE employee_db

-- in the mysql shell, open the employee database, insert these in, departments
INSERT INTO department (name)
VALUES ("Operations"), ("Finance"), ("Engineering"), ("Marketing"), ("Leadership");

-- in the mysql shell, open the employee database, insert these in, roles
INSERT INTO role (title, salary, department_id)
VALUE ("Operations Executive", 40000, 2), ("Analyst", 80000, 3), ("Engineer", 100000, 4), ("Marketing Officer", 70000, 1), ("COO", 300000, 5);

-- in the mysql shell, open the employee database, insert these in, employees
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Kevin", "Durant", 1, 3), ("Stephen", "Curry", 1, 1), ("Lebron", "James", 3, 2), ("James", "Harden", 5, 2), ("PJ", "Tucker", 4, 2);
