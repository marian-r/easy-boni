'use strict';

define([
    'backbone',
    'utils/features'
], function (Backbone, features) {

    var Feature = Backbone.Model.extend({

        initialize: function (id, name, iconName, title) {
            this.id = id;
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

        return new Feature(id, name, iconName, title);
    };

    return Feature;
});
