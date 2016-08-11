if (typeof define !== 'function') {
    // to be able to require file from node
    var define = require('amdefine')(module);
}

define({
    baseUrl: '.',
    // Here paths are set relative to `/source` folder
    paths: {
        'angular': 'vendor/angular/angular',
        'async': 'vendor/requirejs-plugins/src/async',
        'jquery': 'vendor/jquery/dist/jquery',
        'ngAnimate': 'vendor/angular-animate/angular-animate',
        'ui.router': 'vendor/angular-ui-router/release/angular-ui-router'
    },

    shim: {
        'angular': {
            'deps': ['jquery'],
            'exports': 'angular'
        },
        'ngAnimate': ['angular'],
        'ui.router': ['angular']
    }
});
