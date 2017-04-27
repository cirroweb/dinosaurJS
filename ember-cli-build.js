/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var env = EmberApp.env()|| 'development';
  var isProductionLikeBuild = ['production', 'staging'].indexOf(env) > -1;

  var fingerprintOptions = {
    enabled: true,
    extensions: ['js', 'svg', 'css', 'png', 'jpg', 'jpeg', 'gif']
  };

  switch (env) {
    case 'development':
      fingerprintOptions.prepend = 'http://localhost:4200/';
    break;
    case 'staging':
      fingerprintOptions.prepend = process.env['S3_PROD_URL'];
    break;
    case 'production':
      fingerprintOptions.prepend = process.env['S3_PROD_URL'];
    break;
  }

  var app = new EmberApp(defaults, {
    outputPaths: {
      app: {
        css: {
          'app': '/assets/app.css'
        }
      }
    },
    autoprefixer: {
      browsers: ['last 2 ios version'],
      cascade: false
    },
    fingerprint: fingerprintOptions,

    minifyCSS: { enabled: isProductionLikeBuild },
    minifyJS: { enabled: isProductionLikeBuild },
    tests: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild,
    hinting: process.env.EMBER_CLI_TEST_COMMAND || !isProductionLikeBuild
  });

  return app.toTree();
};
