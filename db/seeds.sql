DROP DATABASE IF EXISTS employee_info_db;

-- create datbase
CREATE DATABASE employee_info_db;

-- use database
USE employee_info_db

-- create table
CREATE TABLE department (

id INT NOT NULL AUTO_INCREMENT,

name VARCHAR(30) NOT NULL,

PRIMARY KEY(id)
);