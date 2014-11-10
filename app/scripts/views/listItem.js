'use strict';

define([
    'backbone',
    'lodash',
    'text!../templates/listItem.html'
], function (Backbone, _, template) {

    return Backbone.View.extend({

        template: _.template(template),

        render: function () {
            this.$el.html(this.template(this.model.attributes));
            return this;
        }
    });
});
