USE employee_db

INSERT INTO department (name)
VALUES ("Operations"), ("Finance"), ("Engineering"), ("Marketing"), ("Leadership");

INSERT INTO role (title, salary, department_id)
VALUE ("Operations Executive", 40000, 2), ("Analyst", 80000, 3), ("Engineer", 100000, 4), ("Marketing Officer", 70000, 1), ("COO", 300000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUE ("Kevin", "Durant", 1, 3), ("Stephen", "Curry", 1, 1), ("Lebron", "James", 3, 2), ("James", "Harden", 5, 2), ("PJ", "Tucker", 4, 2);
