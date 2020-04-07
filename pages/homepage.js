let homepage = function(){

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.getUrl = function(url){
        browser.get(url);
    }

    this.enterfirstNumber = function(firstNum){
        firstNumber.sendKeys(firstNum);
    };

    this.secondfirstNumber = function(secondNum){
        secondNumber.sendKeys(secondNum);
    };

    this.clickGo = function(){
        goButton.click();
    };

    this.verifyResult = function(result){
        //let output = element(by.cssContainingText('.ng-binding', result));
        let output = element(by.className('ng-binding'));
        expect(output.getText()).toEqual(result);
    };

};

//module.export = new homepage();
module.exports = new homepage();