var generators = require('yeoman-generator');
var mkdirp = require('mkdirp');
module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);
  },
  initializing: function() {
    
  },
  writing: {
    configs: function() {
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('csslintrc'),
        this.destinationPath('.csslintrc')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('config.json'),
        this.destinationPath('config.json')
      );
    },
    gruntfiles: function() {
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
      this.fs.copy(
        this.templatePath('Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
    },
    misc: function () {
      mkdirp('src/scripts');
      mkdirp('src/styles');
      mkdirp('src/images');
    }
  },
  install: function() {
    
  },
  end: function() {
    
  }
});