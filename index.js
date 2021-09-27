const inquirer = require("inquirer");
const mysql = require("mysql");
require ("console.table");
require("dotenv");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: 3306,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

connection.connect((err) => {
  if (err) throw (err);
  mainMenu();
});

function mainMenu() {
  inquirer
  .prompt({
    name: "action",
    type: "list",
    message: "CHOOSE AN OPTION",
    choices: [
      "View All Employees",
      "View All Employees by Department",
      "View All Employees by Roll",
      "Create a Role",
      "Create a Department",
      "Add an Employee",
      "Add a Roll",
      
      
    ]
  })
}