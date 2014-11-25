'use strict';

define([
    'backbone',
    'lodash',
    'jquery',
    'text!../templates/listItem.html'
], function (Backbone, _, $, template) {

    return Backbone.View.extend({

        template: _.template(template),

        events: {
            'click .star': 'addRating'
        },

        initialize: function () {
            this.model.on('change', _.bind(this.render, this));
        },

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        },

        addRating: function (e) {
            console.log('Rating');
            var $star = $(e.target);
            var restaurantID = this.model.get('id');
            var value = $star.data('value');
            var model = this.model;

            $.get('api/restaurant/add-rating', {
                restaurantID : restaurantID,
                value: value
            }, function (data) {
                console.log(data);
                model.set('rating', data.rating);
            }, 'json');
        }
    });
});
