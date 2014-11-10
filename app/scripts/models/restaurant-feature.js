'use strict';

define([
    'backbone'
], function (Backbone) {

    var Feature = Backbone.Model.extend({

        initialize: function (name, iconName, title) {
            this.name = name;
            this.iconName = iconName;
            this.title = title || name;
        }
    });

    Feature.createFromID = function (id) {
        var name;
        var title;
        var iconName;

        switch (id) {
            case 1:
                name = 'Vegetarian';
                break;
            case 2:
                name ='Celiac';
                break;
            case 3:
                name = 'Wheel chair';
                title = 'Access for disabled persons';
                break;
            case 5:
                name = 'Delivery';
                break;
            case 7:
                name = 'Salad bar';
                break;
            case 8:
                name = 'Wheel chair WC';
                title = 'Access for disabled persons (WC)';
                break;
            case 9:
                name = 'Ugodnosti';
                break;
            case 10:
                name = 'Weekend';
                title = 'Open on weekends';
                break;
            case 11:
                name = 'Lunch';
                break;
            case 12:
                name = 'Pizza';
                break;
            case 13:
                name = 'Fast food';
                break;
            case 14:
                name = 'Sandwich';
                break;
        }

        iconName = 'icon-' + name.replace(/ /g, '-').toLowerCase() + '.png';
        return new Feature(name, iconName, title);
    };

    return Feature;
});
