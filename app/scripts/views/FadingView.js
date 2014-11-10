'use strict';

define([
    'backbone'
], function (Backbone) {

    return Backbone.View.extend({
        renderWithFade: function (content) {
            var $el = this.$el;
            $el.fadeOut(function (){
                $el.html(content);
                $el.fadeIn();
            });
            return this;
        }
    });
});
