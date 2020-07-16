var ORM = require("./Assets/config/orm.js");



    ORM.selectAll("employee")
.then(results => console.table(results))
.catch(err => console.log(err));

ORM.selectAll("employeeRole")
.then(results => console.table(results))
.catch(err => console.log(err));

ORM.selectAll("department")
.then(results => console.table(results))
.catch(err => console.log(err));