'use strict';

define([
    'backbone'
], function (Backbone) {

    return Backbone.Router.extend({
        routes: {
            'map': 'map',
            'list(/:order)(/q=:query)(/c=*categories)(/f=*features)': 'list',
            'detail(/:id)': 'detail',
            '*path': 'map'
        },

        initialize: function (appView, filter) {
            this.appView = appView;
            this.filter = filter;

            var self = this;
            this.filter.on('change', function (newFilter) {
                var attrs = newFilter.attributes;
                var url = attrs.mode + '/' + attrs.order;

                if (attrs.query) {
                    url += '/q=' + attrs.query;
                }
                if (attrs.categories.length) {
                    url += '/c=' + attrs.categories;
                }
                if (attrs.features.length) {
                    url += '/f=' + attrs.features;
                }

                self.navigate(url, {trigger: true});
            });
        },

        map: function () {
            this.filter.set('mode', 'map', {silent: true});
            this.appView.map();
        },

        list: function (order, query, categories, features) {
            console.log('Order: ' + order);
            console.log('Query: ' + query);

            categories = (categories) ? categories.split(',') : [];
            features = (features) ? features.split(',') : [];

            this.filter.set({
                mode: 'list',
                order: order || this.filter.get('order'),
                query: query,
                categories: categories,
                features: features
            }, {silent: true});

            this.appView.list();
        },

        detail: function (id) {
            this.appView.detail(id);
        }
    });
});
