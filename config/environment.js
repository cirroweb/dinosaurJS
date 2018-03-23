/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'dinosaurjs',
    podModulePrefix: 'dinosaurjs/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['g-map'] = {
    libraries: ['places'],
    key: 'AIzaSyBXMxjY-IT-ElZsnfV8HjMBGk4Oilyi858',
    protocol: 'https'
  };

  ENV.contentSecurityPolicy = {
    'default-src': "'none'",
    'font-src': "'self' https://s3-us-west-2.amazonaws.com/ http://www.dinosaurjs.com.s3.amazonaws.com/dinosaurJS/"
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.buildENV = 'production'
  }

  if (environment === 'staging') {
    ENV.buildENV = 'produciton'
  }

  return ENV;
};
