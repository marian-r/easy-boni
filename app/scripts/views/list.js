'use strict';

define([
    'lodash',
    './FadingView',
    'text!../templates/list.html'
], function (_, FadingView, template) {
    return FadingView.extend({
        el: '#content',

        template: _.template(template),

        render: function () {
            this.renderWithFade();
            return this;
        }
    });
});
