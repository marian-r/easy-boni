'use strict';

define([
    'jquery',
    '../models/restaurant',
    '../models/restaurant-feature'
], function ($, RestaurantModel, Feature) {
    var url = 'restaurants.json';

    return {
        loadRestaurants: function (collection) {
            $.get(url, function (data) {
                var array = [];

                for (var i in data) {
                    var restaurant = data[i];
                    var features = data[i].features;
                    restaurant.features = [];
                    for (var j = 0, len = features.length; j < len; j++) {
                        var feature = Feature.createFromID(features[j].id);
                        restaurant.features.push(feature);
                    }

                    var model = new RestaurantModel(restaurant);
                    array.push(model);
                }

                collection.set(array);
                collection.trigger('loaded', collection);
            });

            $.get('api/restaurant/ratings', function (data) {

                function setRatings(collection) {
                    collection.forEach(function (item) {
                        var restaurantID = item.get('id');

                        if (data[restaurantID]) {
                            item.set('rating', data[restaurantID]);
                        }
                    });
                }

                if (collection.isEmpty()) { // not yet loaded
                    collection.once('loaded', setRatings);
                } else {
                    setRatings(collection);
                }

            }, 'json');
        }
    }
});
