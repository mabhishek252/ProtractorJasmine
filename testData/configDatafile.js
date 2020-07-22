'use strict';


var configdataFile = function() {
    this.testConfig = {
        params:{
            firstNo: '20',
            secondNo: '3',
            ExpectedResult: '23'
        },
    }
};

//Create object to read function on project globaly
module.exports = new configdataFile();

