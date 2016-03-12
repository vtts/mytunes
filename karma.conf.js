module.exports = function(config) {
    config.set({

        basePath: '',

        frameworks: ['jasmine'],

        files: [
            // paths loaded by Karma




            {pattern: 'node_modules/es6-shim/es6-shim.min.js', included: true, watched: true},
            {pattern: 'node_modules/systemjs/dist/system-polyfills.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/es6/dev/src/testing/shims_for_IE.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2-polyfills.js', included: true, watched: true},

            {pattern: 'node_modules/systemjs/dist/system.src.js', included: true, watched: true},
            {pattern: 'node_modules/rxjs/bundles/Rx.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/angular2.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/router.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/testing.dev.js', included: true, watched: true},
            {pattern: 'node_modules/angular2/bundles/http.dev.js', included: true, watched: true},

            {pattern: 'node_modules/mockfirebase/node_modules/lodash/dist/lodash.js', included: true, watched: true},
            {pattern: 'node_modules/mockfirebase/browser/mockfirebase.js', included: true, watched: true},

            {pattern: 'karma-test-shim.js', included: true, watched: true},

            // paths loaded via module imports
            {pattern: 'js/**/*.js', included: false, watched: true},

            // paths loaded via Angular's component compiler
            // (these paths need to be rewritten, see proxies section)
            {pattern: 'js/**/*.html', included: false, watched: true},
            {pattern: 'js/**/*.css', included: false, watched: true},

            // paths to support debugging with source maps in dev tools
            {pattern: 'app/**/*.ts', included: false, watched: false},
            {pattern: 'js/**/*.js.map', included: false, watched: false}
        ],

        // proxied base paths
        proxies: {
            // required for component assests fetched by Angular's compiler
            "/js/": "/base/js/"
        },

        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        //plugins : ['karma-jasmine', 'karma-phantomjs-launcher'],
        browsers: ['Chrome'],
        singleRun: false
    })
}