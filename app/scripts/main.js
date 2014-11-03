'use strict';

require.config({
    shim: {
        bootstrap: [
            'jquery'
        ]
    },
    paths: {
        backbone: '../bower_components/backbone/backbone',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        jquery: '../bower_components/jquery/dist/jquery',
        lodash: '../bower_components/lodash/dist/lodash.compat',
        requirejs: '../bower_components/requirejs/require',
        'requirejs-text': '../bower_components/requirejs-text/text',
        underscore: '../bower_components/lodash/dist/lodash'
    },
    packages: []
});

require([
    'backbone',
    'bootstrap'
], function (Backbone, bootstrap) {

    Backbone.history.start();

});
