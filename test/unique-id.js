'use strict';

var uniqueId = require('../unique-id');

module.exports = {

    uniqueId: function (test) {

        var i;
        var l = 100000;
        var id;
        var ids = Object.create(null);

        for ( i = 0; i < l; i += 1 ) {
            id = uniqueId();

            test.strictEqual(typeof id, 'string');
            test.strictEqual(id.length, 8);
            test.ok(/^\w+$/i.test(id));
            test.ok( !(id in ids) );

            ids[id] = true;
        }

        test.done();
    },

    gen: function (test) {
        test.strictEqual( uniqueId.gen(10, 'asd').length, 10);
        test.done();
    }
};
