'use strict';

define([
    'backbone',
    '../models/restaurant',
    '../core/loader'
], function (Backbone, Restaurant, loader) {

    var RestaurantsCollection = Backbone.Collection.extend({
        model: Restaurant,
        comparator: 'name',

        load: function () {
            loader.loadRestaurants(this);
        },

        filterByQuery: function (query) {
            var filtered = this.filter(function (item) {
                var name = item.get('name');
                var address = item.get('address');
                return (name + address + name).search(new RegExp(query, 'i')) !== -1;
            });

            console.log(filtered.length);

            return new RestaurantsCollection(filtered);
        }
    });

    return RestaurantsCollection;
});
