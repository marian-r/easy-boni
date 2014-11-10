'use strict';

define([
    'lodash',
    './FadingView',
    './listItem'
], function (_, FadingView, ListItemView) {

    return FadingView.extend({
        el: '#content',
        $container: $('<div></div>'),

        initialize: function () {
            var $el = this.$container;
            var renderList = this.renderList;

            this.model.on('add', function (model) {
                renderList($el, model);
            });
        },

        render: function () {
            var $el = this.$container.html('');
            var renderList = this.renderList;

            this.model.forEach(function (model) {
                renderList($el, model);
            });

            this.renderWithFade($el);

            return this;
        },

        renderList: function ($el, model) {
            var itemView = new ListItemView({model: model});
            $el.append(itemView.render().el);
        }
    });
});
