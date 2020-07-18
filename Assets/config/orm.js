const connection = require("../config/connection.js");

class ORM {
    constructor(connection) {
        this.connection = connection;
    }
    selectAll(table) {
        const queryString = 'SELECT * FROM  ??';
        return this.connection.query(queryString, [table])
    }
    viewByDepartment(table,selectedCol,value){
        const queryString ='SELECT ?? WHERE ?? = ?';
        return this.connection.query(queryString, [table,selectedCol,val])
    }
    create(table,columns,values){
        const queryString = `INSERT INTO ?? (${columns.join(', ')}) VALUES (${this.printQuestionMarks(values.length)})`;

        console.log(queryString);
    
        return this.connection.query(queryString, [table, ...values])
    }
    update(table, objColVals, id) {
        var queryString = `UPDATE ?? SET ? WHERE ?`;
    
        console.log(queryString);
    
        return this.connection.query(queryString, [table, objColVals, id])

      }
      delete(table, cols, value){
        const queryString = 'DELETE FROM ?? WHERE ??=?';
    
        return this.connection.query(queryString, [table, cols, value])
      }
    };
    //   printQuestionMarks(numberOfValuesOrColumns, type){
    //     const questionMarks = [];
    
    //     for (var i = 0; i < numberOfValuesOrColumns; i++) {
    //       if(type === 'cols'){
    //         questionMarks.push("??");
    //       } else {
    //         questionMarks.push("?")
    //       } 
    //     }
    //     return questionMarks.join(', ');
    //   }
//     innerJoin(colsToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol,tableThree,tableTwoColToJoinThree,tableThreeCol) {
//         const queryString = `SELECT ${this.printQuestionMarks(colsToSelect.length, 'cols')} FROM ?? INNER JOIN ?? ON ??.?? = ??.?? INNER JOIN ?? ON ??.?? = ??.??`;
//         // e.g. SELECT books.id, firstName, lastName, title, coverPhoto FROM books INNER JOIN authors ON books.authorId = authors.id
//         return this.connection.query(queryString, [...colsToSelect, tableOne, tableTwo, tableOne, tableOneCol, tableTwo, tableTwoCol,tableThree,tableTwoColToJoinThree,tableThreeCol])
//       }
//  }

module.exports = new ORM(connection);