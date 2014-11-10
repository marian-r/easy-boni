'use strict';

define([
    'jquery',
    '../models/restaurant'
], function ($, RestaurantModel) {
    var url = 'restaurants.json';

    return {
        loadRestaurants: function (collection) {
            $.get(url, function (data) {
                var array = [];

                for (var i in data) {
                    var restaurant = data[i];
                    var model = new RestaurantModel(restaurant);
                    array.push(model);
                }

                collection.set(array);
                console.log("After loading: " + collection.length);
            });
        }
    }
});
