USE employee_tracker_db;


INSERT INTO department(dept_name)
VALUES ("Security"),
("Sales"),
("Human Recources"),
("Production"),
("Accounting"),
("Marketing"),
("Research");

INSERT INTO roles(title, salary, department_id)
VALUES ("manager", 40000, 1),
("cashier", 20000, 2),
("janitor", 100000, 3),
("Assistant Manager", 35000, 4),
("Human Recource Manager", 29000, 5),
("Team Member", 19000, 6),
("CEO", 600000, 7);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Smith", 1, 1),
("Andy", "Johnson", 2, 2),
("Jennifer", "Kruk", 3, 3),
("Bert", "Earnie", 4, 5),
("Cousin", "George", 5, 9),
("Lester", "Stevens", 7, 6),
("Jester", "Stevens", 6, 13),
("Larry", "Dino", 8, 24);


