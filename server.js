// Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const db = require(".");

// creating connection
const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "UOBCB2022",
    database: "employee_info_db"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);

    startScreen()
});