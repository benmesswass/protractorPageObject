var AngularHomepage = function() {
  var nameInput = element(by.model('yourName'));
  var greeting = element(by.binding('yourName'));

  this.get = function() {
    browser.get('http://www.angularjs.org');
  };

  this.setName = function(name) {
    nameInput.sendKeys(name);
  };


  this.getGreetingConsole = function() {
    return greeting.getText().then(function(text) {
      console.log(text);
      });
  };


  this.getGreetingText = function() {
    return greeting.getText();
  };
};

module.exports = new AngularHomepage();