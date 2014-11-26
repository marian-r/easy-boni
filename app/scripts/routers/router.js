'use strict';

define([
    'backbone',
    'jquery'
], function (Backbone) {

    return Backbone.Router.extend({
        routes: {
            'map': 'map',
            'list(/:order)(/q=:query)(/c=*categories)(/f=*features)': 'list',
            'detail(/:id)': 'detail',
            'user/:action': 'user',
            '*path': 'map'
        },

        initialize: function (appView, userView, filter) {
            this.appView = appView;
            this.userView = userView;
            this.filter = filter;

            var self = this;
            this.filter.on('change', function (newFilter, options) {
                var attrs = newFilter.attributes;
                var url = attrs.mode + '/' + attrs.order;

                if (attrs.query) {
                    url += '/q=' + encodeURIComponent(attrs.query);
                }
                if (attrs.categories.length) {
                    url += '/c=' + attrs.categories;
                }
                if (attrs.features.length) {
                    url += '/f=' + attrs.features;
                }

                // not call router function (trigger) if change was made by router
                var trigger = !(options && options.router);
                self.navigate(url, {trigger: trigger});
            });

            this.userView.model.on('login', function () {
                self.navigate('map', {trigger: true});
            });
        },

        map: function () {
            this.filter.set('mode', 'map', {silent: true});
            this.appView.map();
        },

        list: function (order, query, categories, features) {

            categories = (categories) ? categories.split(',') : [];
            features = (features) ? features.split(',') : [];

            for (var i = 0, len = features.length; i < len; i++) {
                features[i] = parseInt(features[i]);
            }

            this.filter.set({
                mode: 'list',
                order: order || this.filter.get('order'),
                query: query,
                categories: categories,
                features: features
            }, {router: true});

            this.appView.list();
        },

        detail: function (id) {
            this.appView.detail(id);
        },

        user: function (action) {
            this.userView.render();

            switch (action) {
                case 'signin':
                    this.userView.signIn();
                    break;
                case 'register':
                    this.userView.register();
                    break;
                case 'signout':
                    this.userView.model.logout();
            }
        }
    });
});
