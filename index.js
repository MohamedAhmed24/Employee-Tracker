const inquirer = require("inquirer");
const mysql = require("mysql2");
require ("console.table");
require("dotenv").config();

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
      "View All Departments",
      "View All Rolls",
      "Add a Department",
      "Add an Employee",
      "Add a Roll",
      "Update Employee Roll",
      "leave menu"
      
    ]
  }).then((userChoice) => {
    // console.log(userChoice);
    switch(userChoice.action) { 
      case "View All Employees":
        viewAllEmployees();
        break;

      case "View All Departments":
          viewAllDept();
          break;
      
      case "View All Rolls":
        viewAllRole();
        break;
      
      case "Add a Department":
        addDept();
        break;

      case "Add an Employee":
          addEmployee();
          break;

      case "Add a Roll":
            addRoll();
            break;
      
      case "Update Employee Roll":
          updateRoll();
          break;
        
      case "leave menu":
        connection.end();
        break;

      

    }
  })
}// end mainMenu function

function viewAllEmployees(){
  const query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
      if (err) throw err;
      console.log(res.length + " employees found");
      console.table("All Employees:", res); 
      mainMenu();
  })
};

function viewAllDept() {
  const query = "SELECT * FROM department";
    connection.query(query, function(err, res) {
        if(err)throw err;
        console.table("All Departments:", res);
        mainMenu();
    })
};

function viewAllRole() {
  const query = "SELECT * FROM roles";
  connection.query(query, function(err, res) {
      if(err)throw err;
      console.table("All Roles:", res);
      mainMenu();
  })
};