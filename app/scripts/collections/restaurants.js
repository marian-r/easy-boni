'use strict';

define([
    'backbone',
    'lodash',
    '../models/restaurant',
    '../core/loader'
], function (Backbone, _, Restaurant, loader) {

    var filterByQuery = function (item, query) {
        var name = item.get('name');
        var address = item.get('address');
        return (name + address + name).search(new RegExp(query, 'i')) !== -1;
    };

    var filterByFeatures = function (item, filterFeatures) {
        var itemFeatures = item.get('features');
        var matchCount = 0;

        for (var i = 0, len = itemFeatures.length; i < len; i++) {
            var featureID = itemFeatures[i].id;

            if (_.contains(filterFeatures, featureID)) {
                matchCount++;
            }
        }
        return matchCount === filterFeatures.length;
    };

    var RestaurantsCollection = Backbone.Collection.extend({
        model: Restaurant,
        comparator: 'name',

        load: function () {
            loader.loadRestaurants(this);
        },

        performFilter: function (query, features) {
            var filtered = this.filter(function (item) {
                if (query) {
                    if (!filterByQuery(item, query)) {
                        return false;
                    }
                }

                if (features.length) {
                    return filterByFeatures(item, features);
                }

                return true;
            });

            console.log(filtered.length);

            return new RestaurantsCollection(filtered);
        }
    });

    return RestaurantsCollection;
});
