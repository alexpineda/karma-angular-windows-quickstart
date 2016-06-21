module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon', 'chai', 'chai-as-promised'],
    preprocessors: {
      'templates/**/*.*': 'ng-html2js'
    },
    files : [
        'node_modules/q/q.js',
        'js/vendor/jquery.min.js', //if you need jquery, point to your jquery path
        'js/vendor/angular.js',
        'test-helper.js',
        "node_modules/angular-mocks/angular-mocks.js",
        'js/vendor/*.js',
        'js/vendor/app.js',
        'js/**/*.js',
        'templates/**/*.*'
    ],
    exclude: ['node_modules'],
    reporters: ['progress'],
    port: 9999,
    colors: true,
    logLevel: config.LOG_ERROR,
    autoWatch: true,
    browsers: ['Chrome'], // Alternatively: 'PhantomJS'
    captureTimeout: 6000,
    singleRun: false,
    usePolling: true //almost always necessary for windows
  });
};
