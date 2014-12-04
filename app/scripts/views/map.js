'use strict';

define([
    'lodash',
    './FadingView',
    'text!../templates/map.html',
    'text!../templates/marker.html',
    'async!https://maps.google.com/maps/api/js?sensor=false'
], function (_, FadingView, template, markerTemplate) {
    return FadingView.extend({
        el: '#content',

        template: _.template(template),

        render: function () {
            this.$el.html(this.template());
            this.activate();
            return this;
        },

        activate: function () {
            var gmaps = google.maps;
            var mapElem = this.$('#map-canvas');
            var mapOptions = {
                center: new gmaps.LatLng(45.8, 16.0),
                zoom: 8,
                mapTypeId: gmaps.MapTypeId.ROADMAP
            };
            var map = new gmaps.Map(mapElem.get(0), mapOptions);
            var infoWindow = new gmaps.InfoWindow();
            var template = _.template(markerTemplate);

            this.collection.forEach(function (restaurant) {
                var coordinates = restaurant.get('coordinates');
                var latLng = new gmaps.LatLng(coordinates[0], coordinates[1]);

                var marker = new gmaps.Marker({
                    position: latLng,
                    map: map,
                    title: restaurant.get('name')
                });

                gmaps.event.addListener(marker, 'click', function() {
                    infoWindow.setContent(template(restaurant.attributes));
                    infoWindow.setPosition(latLng);
                    infoWindow.open(map, marker);
                });
            });
        }
    });
});
