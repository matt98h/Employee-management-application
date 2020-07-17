const connection = require("../config/connection.js");

class ORM {
    constructor(connection) {
        this.connection = connection;
    }
    selectAll(table) {
        const queryString = 'SELECT * FROM  ??';
        return this.connection.query(queryString, [table])
    }
    fullEmployeeView(columnsNeeded,table){
        // 'SELECT ?? FROM ?? INNER JOIN ?? ON ??.? = ??.?'
        const queryString ='';
    }
    createEmployee(table,columns,values){
        const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;

        console.log(queryString);
    
        return this.connection.query(queryString, [table, ...values])
    }
    update(table, objColVals, id) {
        var queryString = `UPDATE ?? SET ? WHERE ?`;
    
        console.log(queryString);
    
        return this.connection.query(queryString, [table, objColVals, id])
      }
}

module.exports = new ORM(connection);