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
        'text': '../bower_components/requirejs-text/text',
        underscore: '../bower_components/lodash/dist/lodash'
    },
    packages: []
});

require([
    'backbone',
    'bootstrap',
    'routers/router',
    'routers/filter',
    'views/app',
    'collections/restaurants'
], function (Backbone, bootstrap, Router, Filter, AppView, RestaurantsCollection) {

    var collection = new RestaurantsCollection();
    collection.load();

    var filter = new Filter();
    var appView = new AppView(collection, filter);
    appView.render();

    new Router(appView, filter);

    Backbone.history.start();

});
