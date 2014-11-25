'use strict';

define([
    'backbone',
    './userSignIn',
    './userRegister'
], function (Backbone, UserSignInView, UserRegisterView) {
    return Backbone.View.extend({
        el: '#app',

        initialize: function () {
            this.signInView = new UserSignInView({model: this.model});
            this.registerView = new UserRegisterView({model: this.model});
        },

        render: function () {
            this.$('.sidebar').html('');
        },

        signIn: function () {
            this.signInView.render();
        },

        register: function () {
            this.registerView.render();
        }
    });
});
