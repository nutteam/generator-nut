var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Next, add your custom code
    this.option('nutcrx'); // This method adds support for a `--coffee` flag
  },
  initializing: function() {
    console.log('initializing');
  },
  writing: {
    html: function() {
      console.log('writing html');
    }
  },
  install: function() {
    console.log('install');
  },
  end: function() {
    console.log('end');
  }
});