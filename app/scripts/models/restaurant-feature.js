'use strict';

define([
    'backbone',
    'utils/features'
], function (Backbone, features) {

    var Feature = Backbone.Model.extend({

        initialize: function (name, iconName, title) {
            this.name = name;
            this.iconName = iconName;
            this.title = title || name;
        }
    });

    Feature.createFromID = function (id) {
        var feature = features[id];
        var name = feature.name;
        var title = feature.title;
        var iconName = 'icon-' + name.replace(/ /g, '-').toLowerCase() + '.png';

        return new Feature(name, iconName, title);
    };

    return Feature;
});
