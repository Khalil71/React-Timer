var webpackConfig = require('./webpack.config.js')

module.exports = function (config) {
  config.set({
    browsers:['FirefoxAutoAllowGUM'],
    customLaunchers: {
    FirefoxAutoAllowGUM: {
        base: 'Firefox',
        prefs: {
            'media.navigator.permission.disabled': true
        }
      }
    },
    singleRun:true,
    frameworks: ['mocha'],
    files:['app/tests/**/*.test.jsx'],
    preprocessors: {
      'app/tests/**/*.test.jsx':['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client:{
      mocha:{
        timeout: '6000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
