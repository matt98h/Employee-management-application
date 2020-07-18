INSERT INTO department (deptName) VALUES ('Sales');
INSERT INTO department (deptName) VALUES ('IT');
INSERT INTO department (deptName) VALUES ('production');

INSERT INTO employeeRole (id,title, salary,department_id) VALUES (1,'Salesman','1000000',1);
INSERT INTO employeeRole (id,title, salary,department_id) VALUES (2,'Software Engineer','23000000',2);
INSERT INTO employeeRole (id,title, salary,department_id) VALUES (3,'Front End Developer','45000',2);
INSERT INTO employeeRole (id,title, salary,department_id) VALUES (4,'Delivery Driver','100000',3);
INSERT INTO employeeRole (id,title, salary,department_id) VALUES (5,'Senior Delivery Driver','3000000',3);

INSERT INTO employee (id,first_name,last_name,role_id) VALUES (1,'Tommy','Callahan',1);
INSERT INTO employee (id,first_name,last_name,role_id) VALUES (2,'Brett','Favre',1);
INSERT INTO employee (id,first_name,last_name,role_id) VALUES (3,'Kirk','Cousins',2);
INSERT INTO employee (id,first_name,last_name,role_id) VALUES (4,'Lloyd','Christmas',3);
INSERT INTO employee (id,first_name,last_name,role_id) VALUES (5,'Justin','Morneau',4);
INSERT INTO employee (id,first_name,last_name,role_id) VALUES (6,'Ken','Griffey Jr.',5);