'use strict';

define([
    'backbone',
    'lodash',
    'jquery',
    'text!../templates/signIn.html'
], function (Backbone, _, $, template) {

    return Backbone.View.extend({

        el: '#content',

        events: {
            'submit form.form-signin': 'submit'
        },

        template: _.template(template),

        render: function () {
            this.$el.html(this.template());
            return this;
        },

        submit: function (e) {
            var $form = $(e.target);

            this.$('button[type=submit]').addClass('disabled');

            var self = this;
            $.post($form.attr('action'), $form.serialize(), function (data) {
                if (data.success) {
                    self.model.set(data.user);
                    self.model.trigger('login');
                }
                self.$('button[type=submit]').removeClass('disabled');
            });

            e.preventDefault();
        }
    });
});
