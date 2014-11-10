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

        template: _.template(sidebarTemplate),

        render: function () {
            var template = _.template(featureTemplate);
            var featuresElements = [
                template({
                    name: 'All'
                })
            ];

            for (var i in features) {
                var feature = features[i];
                featuresElements.push(template(feature));
            }

            this.$el.html(this.template());
            this.$('#sidebar-list').append(featuresElements);
            return this;
        }
    });
});
