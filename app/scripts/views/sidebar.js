'use strict';

define([
    'backbone',
    'lodash',
    'text!../templates/sidebar.html',
    'text!../templates/sidebar-feature.html',
    'utils/features'
], function (Backbone, _, sidebarTemplate, featureTemplate, features) {
    return Backbone.View.extend({
        el: '#sidebar',

        events: {
            'change input[type=checkbox]': 'featureToggle'
        },

        template: _.template(sidebarTemplate),

        initialize: function () {

            var self = this;
            this.model.once('change', function () {
                _.bind(self.render, self)();
            });
        },

        render: function () {
            var filterFeatures = this.model.get('features');
            var template = _.template(featureTemplate);
            var featuresElements = [
                template({
                    id: 0,
                    checked: false,
                    name: 'Reset'
                })
            ];

            for (var i in features) {
                var feature = features[i];
                var featureID = parseInt(i);

                feature.id = featureID;
                feature.checked = _.contains(filterFeatures, featureID);
                featuresElements.push(template(feature));
            }

            this.$el.html(this.template());
            this.$('#sidebar-list').append(featuresElements);
            return this;
        },

        featureToggle: function (e) {
            var $checkbox = $(e.target);
            var value = parseInt($checkbox.val());
            var filter = this.model;
            var features = _.clone(filter.get('features')); // clone to fire the change event after setting

            if ($checkbox.is(':checked')) {

                if (value === 0) { // reset
                    this.$('input[type=checkbox]').prop('checked', false);
                    $checkbox.prop('checked', true);

                    features = [];

                } else if (!_.contains(features, value)) {
                    features.push(value);
                }

            } else {
                _.pull(features, value);
            }

            filter.set('features', features);
        }
    });
});
