var ORM = require("./Assets/config/orm.js");
var inquirer = require("inquirer");
function promptUser(){


inquirer.prompt([
{
    type: "list",
    name: "userOption",
    message: "What would you like to do?",
    choices: ["View all employees","View employees by department", "Add Employee","Remove Employee", "Update Employee Role"]
}

]);
}
promptUser();
//     ORM.selectAll("employee")
// .then(results => console.table(results))
// .catch(err => console.log(err));

// ORM.selectAll("employeeRole")
// .then(results => console.table(results))
// .catch(err => console.log(err));

// ORM.selectAll("department")
// .then(results => console.table(results))
// .catch(err => console.log(err));