'use strict';

define([
    'backbone',
    'lodash',
    'text!../templates/header.html',
    'text!../templates/header-order.html'
], function (Backbone, _, template, orderTemplate) {
    return Backbone.View.extend({
        el: '#header',

        template: _.template(template),

        render: function () {
            this.$el.html(this.template);
            return this;
        },

        setActiveLink: function (linkID) {
            this.$('#main-nav li').removeClass('active');
            this.$('#main-nav li#' + linkID).addClass('active');

            if (linkID === 'link-list') {
                this.addOrder();
            } else {
                this.addOrder(false);
            }
        },

        addOrder: function (bool) {
            bool = (bool === undefined) ? true : bool;

            if (bool) {
                if (this.$('#nav-order').length > 0) {
                    this.$('#nav-order').show();
                } else {
                    this.$('#nav-contanier').append(orderTemplate);
                }
            } else {
                this.$('#nav-order').hide();
            }
        }
    });
});
