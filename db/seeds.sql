INSERT INTO department (name)
VALUES ("Engineering"),
       ("Sales"),
       ("Finance"),
       ("Production"),
       ("Legal");

INSERT INTO role (title,salary, department_id)
VALUES ("Sales Lead", 100000, 2),
       ("Salesperson", 80000, 2),
       ("Lead Engineer", 150000, 1),
       ("Software Engineer", 120000, 1),
       ("R&D Technician", 80000, 1),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 5),
       ("Lawyer", 190000, 5),
       ("Production Manager", 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Ross", 1, NULL),
       ("Mike", "Thomas", 2, 1),
       ("Asley", "Chan", 3, NULL),
       ("Kevin", "Rodriguez", 4, 3),
       ("Sunny", "Lee", 5, 3),
       ("Kunal", "Tupik", 6, NULL),
       ("Malia", "Singh", 7, 6),
       ("Sarah", "Brown", 8, NULL),
       ("Tom", "Lourd", 9, 8),
       ("Shang", "Celsius", 10, NULL);