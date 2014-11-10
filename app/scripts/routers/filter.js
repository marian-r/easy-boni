'use strict';

define([
    'backbone',
    'lodash'
], function (Backbone, _) {

    return Backbone.Model.extend({

        defaults: {
            mode: null,
            order: 'name',
            query: null,
            categories: [],
            features: []
        }
    });
});
