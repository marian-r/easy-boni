'use strict';

define([
    'jquery'
], function ($) {

    var bannedWords = [];

    $.get('swearWords.txt', function(data) {
        bannedWords = data.toString().split("\r\n");
    });

    var validateBannedWords = function (text) {
        for (var i = 0, len = bannedWords.length; i < len; i++) {
            var word = bannedWords[i];
            var pattern = '\\b' + bannedWords[i] + '\\b';
            var position = text.search(new RegExp(pattern, 'gi'));

            if (position !== -1) {
                return false;
            }
        }
        return true;
    };

    return {
        validateBannedWords: validateBannedWords
    };
});
