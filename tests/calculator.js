let homepage = require('../pages/homepage');
let dataRequired = require('../conf/xcelTojson');
let configDataFile = require('../testData/configDatafile');

describe('Demo Test case', function () {

    it('addition test', function () {

        //browser.get('http://juliemr.github.io/protractor-demo/');
        //homepage.getUrl('http://juliemr.github.io/protractor-demo/');
        homepage.getUrl(browser.params.url);   
       
        //element(by.model('first')).sendKeys('20');
        //homepage.enterfirstNumber('5');
        //homepage.enterfirstNumber(browser.params.firstNo);
        homepage.enterfirstNumber(configDataFile.testConfig.params.firstNo);

        //element(by.model('second')).sendKeys('30');
        //homepage.secondfirstNumber('8'),
        homepage.secondfirstNumber(dataRequired.testConfig.SecondNo1);

        //element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        //let results = element(by.cssContainingText('.ng-binding', '50'));
        //expect(results.getText()).toEqual('50');
        homepage.verifyResult(configDataFile.testConfig.params.ExpectedResult);


        browser.sleep(2000);

    });

    // it('substraction test', function () {
            
    //     //browser.get(browser.params.url);
    //     //browser.get('http://juliemr.github.io/protractor-demo/');
    //     //homepage.getUrl('http://juliemr.github.io/protractor-demo/');
    //     homepage.getUrl(browser.params.url);
        

    //     //element(by.model('first')).sendKeys('20');
    //     //homepage.enterfirstNumber('5');
    //     homepage.enterfirstNumber(browser.params.firstNo);

    //     //element(by.model('second')).sendKeys('30');
    //     //homepage.secondfirstNumber('8'),
    //     homepage.secondfirstNumber(browser.params.secondNo),

    //     //element(by.css('[ng-click="doAddition()"]')).click();
    //     homepage.clickGo1();

    //     //let results = element(by.cssContainingText('.ng-binding', '50'));
    //     //expect(results.getText()).toEqual('50');
    //     homepage.verifyResult('13');


    //     browser.sleep(2000)

    // });

});