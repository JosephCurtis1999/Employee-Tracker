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


    database: "employee_db"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);

    startScreen()
});

// user view when logging into node
function startScreen() {
    inquirer
    .prompt({
        type: "list",
        choices: [
            "Add department",
            "Add role",
            "Add employee",
            "View departments",
            "View roles",
            "View employees",
            "Quit"
        ],
        message: "What would you like to do?",
        name: "option"
    })
    .then(function(result) {
        console.log("You entered: " + result.option);

        switch (result.option) {
            case "Add department":
                addDepartment();
                break;
            case "Add role":
                addRole();
                break;
            case "Add employee":
                addEmployee();
                break;
            case "View departments":
                viewDepartment();
                break;
            case "View roles":
                viewRoles();
                break;
            case "View employees":
                viewEmployees();
                break;
            case "Update employee role":
                updateEmployee();
                break;
                default:
                quit();
        }
    });
}

// Add department function 

function addDepartment() {

    inquirer.prompt({
        type: "input",
        message: "What is the department name?",
        name: "deptName"
    }).then(function(answer) {
        connection.query("INSERT INTO department (name) VALUES (?)", [answer.deptName], function(err, res) {
            if (err) throw err;
            console.table(res)
            startScreen()
        })
    })
};

// Add role function

function addRole() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What is the name of the role?",
            name: "roleName"
        },
        {
            type: "input",
            message: "What is the salary of the role?",
            name: "salaryTotal"
        },
        {
            type: "input",
            message: "What is the department id number?",
            name: "deptID"
        },
    ])
    .then(function(answer) {
        connection.query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [answer.roleName, answer.salaryTotal, answer.deptID], function(err,res) {
            if (err) throw err;
            console.table(res);
            startScreen();
        });
    });
}

// Add employee function

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the first name of the employee?",
            name: "eeFirstName"
        },
        {
            type: "input",
            message: "What is the last name of the employee?",
            name: "eeLastName"
        },
        {
            type: "input",
            message: "What is the employee's role id number?",
            name: "roleID"
        },
        {
            type: "input",
            message: "What is the manager id number?",
            name: "managerID"
        },
    ])
    .then(function(answer) {
        connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [answer.eeFirstName, answer.eeLastName, answer.roleID, answer.managerID], function(err, res) {
           if (err) throw err;
           console.table(res);
           startScreen(); 
        });
    });
}

// update employee function

function updateEmployee() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Which employee would you like to update?",
            name: "eeUpdate"
        },
        {
            type: "input",
            message: "What do you want to update to?",
            name: "updateRole"
        },
    ])
    .then(function(answer) {
        connection.query('UPDATE employee SET role_id=? WHERE first_name= ?', [answer.updateRole, answer.eeUpdate], function(err, res) {
            if (err) throw err;
            console.table(res);
            startScreen();
        });
    });
}

// view department function
function viewDepartment() {
    let query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });
}

// view roles function
function viewRoles() {
    let query = "SELECT * FROM role";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });
}

// view employees function
function viewEmployees() {
    let query = "SELECT * FROM employee";
    connection.query(query, function(err, res) {
        if (err) throw err;
        console.table(res);
        startScreen();
    });
}

// quit function
function quit() {
    connection.end();
    process.exit();
}