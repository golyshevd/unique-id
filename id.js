'use strict';

var CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var LAST_POS = CHARSET.length - 1;

/**
 * @returns {String}
 * */
function id () {

    return id.gen(id.DEFAULT_LENGHT);
}

id.DEFAULT_LENGHT = 8;

id.gen = function gen (n) {

    var result = '';

    while ( n ) {
        result += CHARSET.charAt( Math.floor(Math.random() * LAST_POS) );
        n -= 1;
    }

    return result;
};

module.exports = id;
