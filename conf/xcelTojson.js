'use strict';
//fs-extra
var fs = require('C:/Users/abhishek.mishra/AppData/Roaming/npm/node_modules/fs-extra');
//excelToJson
const excelToJson = require('C:/Users/abhishek.mishra/AppData/Roaming/npm/node_modules/convert-excel-to-json');
var readxlfile = fs.readFileSync('../ProtractorDemo/testData/readxcelfile.xlsx');
 
//Function to read excel file
const workbook = excelToJson({
    //source : fs.readFileSync('conf/readxcelfile.xlsx'),
    //source : fs.readFileSync('../ProtractorDemo/testData/readxcelfile.xlsx'),
    source : readxlfile,
    header:{
        //This row will skip
        rows: 1
    }
});

//To print value coming from excel files
console.log('xcel output ::', workbook );
console.log('First Number 1 :', workbook.calculate[0].A);
console.log('Second Number 1 :', workbook.calculate[0].B);
console.log('First Number 2 :', workbook.calculate[1].A);
console.log('Second Number 2 :', workbook.calculate[1].B);




//Function to store excel values
var dataRequired = function() {
    this.testConfig = {
        FirstNo1 : workbook.calculate[0].A,
        SecondNo1 : workbook.calculate[0].B,

        FirstNo2 : workbook.calculate[1].A,
        SecondNo2 : workbook.calculate[1].B,
    }
};

//Create object to read function on project globaly
module.exports = new dataRequired();