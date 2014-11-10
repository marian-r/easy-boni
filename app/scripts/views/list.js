'use strict';

define([
    'lodash',
    './FadingView',
    './listItem'
], function (_, FadingView, ListItemView) {

    return FadingView.extend({
        el: '#content',

        initialize: function () {
            var $el = this.$container;
            var renderList = this.renderList;
        },

        render: function () {
            var $el = $('<div></div>');

            this.collection.forEach(function (model) {
                var itemView = new ListItemView({model: model});
                $el.append(itemView.render().el);
            });

            this.renderWithFade($el);
            return this;
        }
    });
});
