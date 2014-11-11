'use strict';

define([
    'backbone',
    'lodash',
    'text!../templates/header.html',
    'text!../templates/header-order.html'
], function (Backbone, _, template, orderTemplate) {
    return Backbone.View.extend({
        el: '#header',

        events: {
            'submit #search-form': 'search',
            'click .order': 'sort'
        },

        template: _.template(template),

        initialize: function () {
            var self = this;
            this.model.once('change', function () {
                _.bind(self.render, self)();
            });
        },

        render: function () {
            this.$el.html(this.template({
                value: this.model.get('query')
            }));
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
        },

        search: function () {
            this.model.set('query', this.$('#search-box').val());
            return false;
        },

        sort: function (e) {
            var sortBy = $(e.target).data('sort');
            this.model.set('order', sortBy);
            e.preventDefault();
        }
    });
});
