var ORM = require("./Assets/config/orm.js");
var inquirer = require("inquirer");


start();


function start() {
    ORM.innerJoin(["employee.id", "employee.first_name", "employee.last_name", "employeeRole.title", "department.deptName", "employeeRole.salary"], "employee",
        "employeeRole", "employee.role_id", "employeeRole.id", "department", "employeeRole.department_id", "department.id")
        .then(response => console.table(response))
        .catch(err => console.log(err))
    function promptUser() {


        inquirer.prompt({
            type: "list",
            name: "userOption",
            message: "What would you like to do?",
            choices: ["View all employees", "View employees by department", "Add Employee", "Remove Employee", "Update Employee Role"]
        })
            .then(function (answer) {
                // based on their answer, either call the bid or the post functions
                if (answer.userOption === "View all employees") {
                    viewEmployees();
                }
                else if (answer.userOption === "View employees by department") {
                    viewEmployeesByDepartment();
                } else if (answer.userOption === "Add Employee") {
                    addEmployee();
                } else if (answer.userOption === "Remove Employee") {
                    removeEmployee();
                } else {
                    updateRole();
                }
            })
    }

    function viewEmployees() {
        ORM.selectAll("employee")
            .then(response => console.table(response))
        promptUser();

    }
    function viewEmployeesByDepartment() {
        inquirer.prompt([
            {
                type: "input",
                name: "department",
                message: "What department would you like to view?"
            },

        ]).then(function (answer) {

            ORM.viewByDepartment("allinfo", "allinfo.deptName", answer.department)
            .then(response => console.table(response))
            promptUser();
        })
    }

    function addEmployee() {
        inquirer.prompt([
            {
                type: "input",
                name: "firstName",
                message: "What is their first name?"
            },
            {
                type: "input",
                name: "lastName",
                message: "What is their last name?"
            }
        ]).then(function (answers) {
            ORM.create("employee", ["first_name", "last_name"], [answers.firstName, answers.lastName]);
            ORM.selectAll("employee")
                .then(response => console.table(response))
        })
    }
    function removeEmployee() {
        inquirer.prompt({
            type: "input",
            name: "employeeId",
            message: "What is the Id of the employee you'd like to remove?"
        }).then(function (answer) {
            ORM.delete("employee", "id", answer.employeeId)
            .then(function(){
            ORM.selectAll('employee')
            .then(response => console.table(response))            
            
        })
        })
    }
    function updateRole() {
        inquirer.prompt([
            {
                type: "input",
                name: "employeeId",
                message: "What is the id of the person whose role you want to update?"
            },
            {
                type: "input",
                name: "newRole",
                message: "What would you like to update their role to?"
            }
        ]).then(function (answers) {
            ORM.update("employee", answers.newRole, answers.employeeId)
            conosle.table(ORM.selectAll("employee"))
            start();
        })
    }
    promptUser();
}

// ORM.selectAll("allinfo")
//     .then(results => console.table(results))
//     .catch(err => console.log(err))




