'use strict';

define([
    'backbone',
    '../views/header',
    '../views/sidebar',
    '../views/map',
    '../views/list',
    '../views/detail'
], function (Backbone, HeaderView, SideBar, MapView, ListView, DetailView) {
    return Backbone.Router.extend({
        routes: {
            'map': 'map',
            'list': 'list',
            'detail(/:id)': 'detail',
            '*path': 'map'
        },

        initialize: function () {
            this.headerView = new HeaderView();
            this.headerView.render();
            this.sidebarView = new SideBar();
            this.sidebarView.render();
        },

        map: function () {
            var mapView = new MapView();
            mapView.render();
            this.headerView.setActiveLink('link-map');
        },

        list: function () {
            var listView = new ListView();
            listView.render();
            this.headerView.setActiveLink('link-list');
        },

        detail: function (id) {
            var detailView = new DetailView();
            detailView.render();
        }
    });
});
