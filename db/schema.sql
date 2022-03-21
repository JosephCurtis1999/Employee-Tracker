DROP DATABASE IF EXISTS employee_db;

-- create datbase
CREATE DATABASE employee_db;

-- use database
USE employee_db

-- create department table
CREATE TABLE department (

id INT NOT NULL AUTO_INCREMENT,

name VARCHAR(30) NOT NULL,

PRIMARY KEY(id)
);

-- create role table
CREATE TABLE role (

id INT NOT NULL AUTO_INCREMENT,

title VARCHAR(30) NOT NULL,

salary DECIMAL(10,2) NOT NULL,

department_id INT NOT NULL,

PRIMARY KEY (id)
);

-- create employee table
CREATE TABLE employee (

id INT NOT NULL AUTO_INCREMENT,

first_name VARCHAR(30) NOT NULL,

last_name VARCHAR(30) NOT NULL,

role_id INT NOT NULL,

manager_id INT,

PRIMARY KEY (id)
);