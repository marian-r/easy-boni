'use strict';

define([
    'backbone'
], function (Backbone) {

    return Backbone.Model.extend({
        defaults: {
            id: null,
            name: '',
            address: '',
            telephone: [],
            price: null,
            coordinates: [
                null,
                null
            ],
            opening: {
                week: [null, null],
                saturday: [null, null],
                sunday: [null, null],
                notes: ''
            },
            menu: [],
            features: [],

            rating: 0,
            comments: []
        }
    });
});
