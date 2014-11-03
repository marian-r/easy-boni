'use strict';

define([
    'backbone',
    'lodash',
    'text!../templates/list.html'
], function (Backbone, _, template) {
    return Backbone.View.extend({
        el: '#content',

        template: _.template(template),

        render: function () {
            this.$el.html(this.template);
            return this;
        }
    });
});
