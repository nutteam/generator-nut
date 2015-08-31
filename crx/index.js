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
        this.templatePath('src/manifest.json'),
        this.destinationPath('src/manifest.json')
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
      this.fs.copy(
        this.templatePath('install.bat'),
        this.destinationPath('install.bat')
      );
    },
    scripts: function() {
      this.fs.copy(
        this.templatePath('src/scripts/background.js'),
        this.destinationPath('src/scripts/background.js')
      );
      this.fs.copy(
        this.templatePath('src/scripts/content.js'),
        this.destinationPath('src/scripts/content.js')
      );
      this.fs.copy(
        this.templatePath('src/scripts/popup.js'),
        this.destinationPath('src/scripts/popup.js')
      );
    },
    styles: function() {
      this.fs.copy(
        this.templatePath('src/styles/popup.css'),
        this.destinationPath('src/styles/popup.css')
      );
    },
    html: function() {
      this.fs.copy(
        this.templatePath('src/popup.html'),
        this.destinationPath('src/popup.html')
      );
    },
    misc: function () {
      mkdirp('pem');
      mkdirp('src/images');
    }
  },
  install: function() {
    this.installDependencies({
      npm: true,
      bower: false,
      skipInstall: true,
      skipMessage: true
    });
  },
  end: function() {
    
  }
});