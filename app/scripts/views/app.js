'use strict';

define([
    'backbone',
    'lodash',
    './header',
    './sidebar',
    './map',
    './list',
    './detail'
], function (Backbone, _, HeaderView, SideBar, MapView, ListView, DetailView) {
    return Backbone.View.extend({
        el: '#app',

        render: function () {
            this.headerView = new HeaderView();
            this.headerView.render();
            this.sidebarView = new SideBar();
            this.sidebarView.render();

            return this;
        },

        map: function () {
            var mapView = new MapView();
            mapView.render();
            this.headerView.setActiveLink('link-map');
        },

        list: function () {
            var listView = this.listView = this.listView || new ListView({model: this.model});
            listView.render();
            this.headerView.setActiveLink('link-list');
        },

        detail: function (id) {
            var detailView = new DetailView({model: this.model.get(id)});
            detailView.render();
        }
    });
});
