var angularHomepage = require('C:/Users/Wbenmessaoud/Desktop/Wass/Training Zenity/Formation protractor/PageObject Test/AngularHomepage');

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    angularHomepage.get();

    angularHomepage.setName('Julie');

    angularHomepage.getGreetingConsole();

    expect(angularHomepage.getGreetingText()).toEqual('Hello Julie!');
  });
});