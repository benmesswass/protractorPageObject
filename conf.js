exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],


  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the location of the spec file. They may
  // include glob patterns.
  suites: {
    homepage: 'C:/Users/Wbenmessaoud/Desktop/Wass/Training Zenity/Formation protractor/PageObject Test/Spec.js',
    search: ['C:/Users/Wbenmessaoud/Desktop/Wass/Training Zenity/Formation protractor/PageObject Test/Spec.js',
      'C:/Users/Wbenmessaoud/Desktop/Wass/Training Zenity/Formation protractor/PageObject Test/Spec.js']
  },

  // Options to be passed to Jasmine-node.
  
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};
