CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
deptName VARCHAR(30),
PRIMARY KEY(id)
);
CREATE TABLE employeeRole(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
title VARCHAR(30),
salary VARCHAR(30),
department_id INTEGER,
PRIMARY KEY(id),
FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
roleId INTEGER,
PRIMARY KEY (id),
FOREIGN KEY (roleId) REFERENCES employeeRole(id)
-- will help if find employees by manager
-- FOREIGN KEY (manager_id) REFERENCES manager(id)
);
CREATE TABLE allInfo(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
first_name VARCHAR(30),
last_name VARCHAR(30),
roleId INTEGER,
PRIMARY KEY (id),
FOREIGN KEY (roleId) REFERENCES employeeRole(id)
-- will help if find employees by manager
-- FOREIGN KEY (manager_id) REFERENCES manager(id)
);

