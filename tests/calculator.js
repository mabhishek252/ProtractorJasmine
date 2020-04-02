describe('Demo Test case', function(){

    it('addition test', function(){
         
        browser.get('http://juliemr.github.io/protractor-demo/');
        
        element(by.model('first')).sendKeys('20');

        element(by.model('second')).sendKeys('30');

        element(by.css('[ng-click="doAddition()"]')).click();

        let results = element(by.cssContainingText('.ng-binding', '50'));

        expect(results.getText()).toEqual('50');
        
        browser.sleep(2000)

    });

});