'use strict';

define([
    'backbone',
    '../models/restaurant',
    '../core/loader'
], function (Backbone, Restaurant, loader) {

    return Backbone.Collection.extend({
        model: Restaurant,

        load: function () {
            loader.loadRestaurants(this);
        }
    });
});
