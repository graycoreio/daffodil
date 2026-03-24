var SassDaffodilImporterPlugin = require('./sass-daffodil-importer-plugin');

module.exports = function(config) {
  var coverageDir = require('path').join(__dirname, '../../coverage');

  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: coverageDir,
      reports: ['html', 'lcovonly'],
      fixWebpackSourcePaths: true
    },
    coverageReporter: {
      dir: coverageDir
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    customLaunchers: {
      ChromeHeadlessDebug: {
        base: 'ChromeHeadless',
        flags: ['--remote-debugging-port=9222']
      }
    },
    browserDisconnectTolerance: 3,
    browserDisconnectTimeout : 210000,
    browserNoActivityTimeout : 210000,
    singleRun: false,
  });
  var _buildWebpack;
  Object.defineProperty(config, 'buildWebpack', {
    get: function() { return _buildWebpack; },
    set: function(value) {
      if (value && value.webpackConfig) {
        value.webpackConfig.plugins = value.webpackConfig.plugins || [];
        value.webpackConfig.plugins.push(new SassDaffodilImporterPlugin());
      }
      _buildWebpack = value;
    },
    enumerable: true,
    configurable: true,
  });

  return config;
}
