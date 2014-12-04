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
        'jquery-cookie': '../bower_components/jquery-cookie/jquery.cookie',
        lodash: '../bower_components/lodash/dist/lodash.compat',
        requirejs: '../bower_components/requirejs/require',
        'text': '../bower_components/requirejs-text/text',
        propertyParser : '../bower_components/requirejs-plugins/src/propertyParser',
        async: '../bower_components/requirejs-plugins/src/async',
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
    'views/user',
    'collections/restaurants',
    'models/user'
], function (Backbone, bootstrap, Router, Filter, AppView, UserView, RestaurantsCollection, User) {

    var collection = new RestaurantsCollection();
    collection.load();

    var user = new User();
    user.fetch();

    var filter = new Filter();
    var appView = new AppView(collection, filter, user);
    appView.render();

    var userView = new UserView({model: user});

    new Router(appView, userView, filter);

    Backbone.history.start();

});
