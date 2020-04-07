// An example configuration file.
//var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
var HtmlScreenshotReporter = require('C:/Users/abhishek.mishra/AppData/Roaming/npm/node_modules/protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

// Object for excel file 
var jsonDatafile = require('../testData/configDatafile');

// Object for excel file 
var xcelTojason = require('./xcelTojson');

exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../tests/calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 60000
  },

  //Read data from config file
  params:{
        url:'http://juliemr.github.io/protractor-demo/',
    },

  //Test suites name and path
   suites: {
        regression: '',
        smoke: '',
        sanity: ''
   }, 

  // Setup the report before any tests start
  beforeLaunch: function () {
    return new Promise(function (resolve) {
      reporter.beforeLaunch(resolve);
    });
  },

  // Assign the test reporter to each running instance
  onPrepare: function () {
    jasmine.getEnv().addReporter(reporter);

    //Print config file data
    console.log(jsonDatafile.testConfig.params.url);

    //Print excel data
    console.log(xcelTojason.testConfig.FirstNo1);

    //HTMLReport function
    // //var jasmineReporters = require('jasmine-reporters');
    // var jasmineReporters = require('C:/Users/abhishek.mishra/AppData/Roaming/npm/node_modules/protractor-html-reporter-2');
    // jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
    //     consolidateAll: false,
    //     savePath: './',
    //     filePrefix: 'xmlresults'
    // }));

    // //Screenshot for failed TCs with HTML report
    // var fs = require('fs-extra');
    // fs.emptyDir('screenshots/', function (err) {
    //   console.log(err);
    // });

    jasmine.getEnv().addReporter({
      specDone: function (result) {
        if (result.status == 'failed') {
          browser.getCapabilities().then(function (caps) {
            var browserName = caps.get('browserName');

            browser.takeScreenshot().then(function (png) {
              var stream = fs.createWriteStream('screenshots/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    });

    //AllureReporter function
    //var AllureReporter = require('jasmine-allure-reporter');
    var AllureReporter = require('C:/Users/abhishek.mishra/AppData/Roaming/npm/node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  // Close the report after all tests finish
  afterLaunch: function (exitCode) {
    return new Promise(function (resolve) {
      reporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },

  //HTMLReport called once tests are finished
  // onComplete: function () {
  //   var browserName, browserVersion;
  //   var capsPromise = browser.getCapabilities();

  //   capsPromise.then(function (caps) {
  //     browserName = caps.get('browserName');
  //     browserVersion = caps.get('version');
  //     platform = caps.get('platform');

  //     var HTMLReport = require('protractor-html-reporter-2');

  //     testConfig = {
  //       reportTitle: 'Protractor Test Execution Report',
  //       outputPath: './',
  //       outputFilename: 'ProtractorTestReport',
  //       screenshotPath: './screenshots',
  //       testBrowser: browserName,
  //       browserVersion: browserVersion,
  //       modifiedSuiteName: false,
  //       screenshotsOnlyOnFailure: true,
  //       testPlatform: platform
  //     };
  //     new HTMLReport().from('xmlresults.xml', testConfig);
  //   });
  // }


};
