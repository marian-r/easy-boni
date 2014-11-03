'use strict';

define([
    'backbone',
    'lodash',
    'text!../templates/sidebar.html'
], function (Backbone, _, template) {
    return Backbone.View.extend({
        el: '#sidebar',

        template: _.template(template),

        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
});
