module.exports = function(config) {

  config.set({
    basePath: '',
    frameworks: ['mocha', 'sinon', 'chai', 'chai-as-promised'],
    preprocessors: {
      'templates/**/*.*': 'ng-html2js'
    },
    //plugins : ['karma-*'], //the default is shown
    //..loading our karma-* plugins allows us to specify frameworks above

    files : [
        'node_modules/q/q.js', //to replace $q
        //'js/vendor/jquery.min.js',
        //'your_path/angular.js',            //if installed manually
        //'node_modules/angular/angular.js', //if installed via npm
        'test-helper.js',
        "node_modules/angular-mocks/angular-mocks.js",
        //'js/vendor/*.js', //load additional dependencies
        //'js/vendor/app.js', //load certain js files if they need to be loaded first
        //'js/**/*.js', //load your app files
        //'templates/**/*.*' //load your templates and directive templates
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
