'use strict';

define([
    'backbone'
], function (Backbone) {

    return Backbone.View.extend({
        renderWithFade: function () {
            var $el = this.$el;
            var template = this.template;
            $el.fadeOut(function (){
                $el.html(template);
                $el.fadeIn();
            });
            return this;
        }
    });
});
