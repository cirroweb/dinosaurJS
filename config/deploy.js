/* jshint node: true */

var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'dev',
  'qa',
  'production'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: 'dinosaurJS:index'
    },
    s3: {
      prefix: 'dinosaurJS'
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'dev') {
    ENV.build.environment = 'development';
    ENV.redis.url = process.env.REDIS_URL || 'redis://0.0.0.0:6379/';
    ENV.plugins = ['build', 'redis']; // only care about deploying index.html into redis in dev
  }

  if (deployTarget === 'qa' || deployTarget === 'production') {
    ENV.build.environment = 'production';
    ENV.s3.accessKeyId = process.env['S3_ACCESS_KEY_ID'];
    ENV.s3.secretAccessKey = process.env['S3_ACCESS_KEY'];
    ENV.s3.bucket = 'www.dinosaurjs.com';
    ENV.s3.region = 'us-west-2'
  }

  if (deployTarget === 'qa') {
    ENV.redis.url = process.env['REDIS_URL'];
  }

  if (deployTarget === 'production') {
    ENV.redis.url = process.env['REDIS_URL'];
  }

  return ENV;
}
