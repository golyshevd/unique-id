'use strict';

var uniqueId = require('../id');

module.exports = {

    id: function (test) {

        var i;
        var l = 100000;
        var id;
        var ids = Object.create(null);

        for ( i = 0; i < l; i += 1 ) {
            id = uniqueId();

            test.strictEqual(typeof id, 'string');
            test.strictEqual(id.length, uniqueId.DEFAULT_LENGHT);
            test.ok(/^\w+$/i.test(id));
            test.ok( !(id in ids) );

            ids[id] = true;
        }

        test.done();
    },

    gen: function (test) {
        test.strictEqual( uniqueId.gen(10).length, 10);
        test.done();
    }
};
