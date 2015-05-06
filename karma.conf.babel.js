// Karma configuration
// Generated on Fri Mar 14 2014 15:01:19 GMT-0700 (PDT)

var babelOptions = require('./config').babel;

module.exports = function(config) {

  var files;

  files = [
      'test/**/*.js', 'test-babel/ToAnnotation_spec.js'
  ];

  config.set({
    frameworks: ['jasmine', 'browserify', 'sourcemaps'],

    files: [
      'node_modules/karma-babel-preprocessor/node_modules/babel-core/browser-polyfill.js'
      // The entry point that dynamically imports all the specs.
      //{pattern: 'test-help/main.js', included: true},

      // The runtime assertion library.
      //'node_modules/rtts-assert/dist/cjs/assert.js',
      //'node_modules/angular/angular.js',
      //'node_modules/angular-mocks/angular-mocks.js'
    ].concat(files),

    preprocessors: {
      'test/**/*.js': ['browserify'],
      'test-babel/ToAnnotation_spec.js': ['browserify']
    },

    browsers: ['Chrome'],

    browserify: {
      debug: true,
      transform: [ ['babelify', babelOptions] ]
    }

  });

  config.plugins.push(require('./karma_sourcemaps'));
};
