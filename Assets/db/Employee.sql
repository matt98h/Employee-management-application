CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
id INTEGER(11) AUTO_INCREMENT,
deptName VARCHAR(30),
PRIMARY KEY(id)
);
CREATE TABLE employeeRole(
id INTEGER(11) AUTO_INCREMENT,
title VARCHAR(30),
salary VARCHAR(30),
department_id INTEGER,
PRIMARY KEY(id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INTEGER(11) AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
PRIMARY KEY (id),
FOREIGN KEY (role_id) REFERENCES employeeRole(id)
);

CREATE TABLE allinfo AS
SELECT employee.id, employee.first_name, employee.last_name, employeeRole.title,department.deptName,employeeRole.salary 
FROM ((employee
INNER JOIN employeeRole ON employeeRole.id = employee.role_id)
INNER JOIN department on department.id = employeeRole.department_id)

