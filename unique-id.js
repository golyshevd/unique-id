'use strict';

var DEFAULT_CHARSET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ' +
    'abcdefghijklmnopqrstuvwxyz';
var DEFAULT_LENGTH = 8;

/**
 * @param {Number} [length]
 * @param {String} [charset]
 *
 * @returns {String}
 * */
function uniqueId (length, charset) {

    return uniqueId.gen(length || DEFAULT_LENGTH, charset || DEFAULT_CHARSET);
}

/**
 * @public
 * @static
 * @memberIof uniqueId
 * @method
 *
 * @param {Number} length
 * @param {String} charset
 *
 * @returns {String}
 * */
uniqueId.gen = function (length, charset) {

    var result = '';
    var max = charset.length - 1;

    while ( length ) {
        length -= 1;
        result += charset.charAt( randomInt(max) );
    }

    return result;
};

function randomInt (max) {

    return Math.floor(Math.random() * max);
}

module.exports = uniqueId;
