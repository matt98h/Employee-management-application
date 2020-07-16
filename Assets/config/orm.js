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
}

module.exports = new ORM(connection);