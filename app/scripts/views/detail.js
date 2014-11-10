'use strict';

define([
    'lodash',
    './FadingView',
    'text!../templates/detail.html'
], function (_, FadingView, template) {

    return FadingView.extend({
        el: '#content',

        template: _.template(template),

        render: function () {
            var template = this.template(this.model.attributes);
            this.renderWithFade(template);
            return this;
        }
    });
});
