let homepage = require('../pages/homepage');
let dataRequired = require('../conf/xcelTojson');
let configDataFile = require('../testData/configDatafile');

describe('Demo Test case', function () {

    it('addition test', function () {

        homepage.getUrl(browser.params.url);   

        homepage.firstNumber(configDataFile.testConfig.params.firstNo);

        homepage.secondNumber(configDataFile.testConfig.params.secondNo);

        homepage.clickGo();

        homepage.verifyPositiveTC(configDataFile.testConfig.params.ExpectedResult);

        browser.sleep(2000);

    });

    it('substraction test', function () {
            
        homepage.getUrl(browser.params.url);       

        homepage.firstNumber(dataRequired.testConfig.FirstNo2);

        homepage.secondNumber(dataRequired.testConfig.SecondNo2),

        homepage.clickGo();

        homepage.verifyNegativeTC('13');

    });

});