#!/usr/bin/env mocha
'use strict';

const assert = require('assert');
const uniqueId = require('../unique-id');

describe('unique-id', () => {
    it('Should generate unique ids', () => {
        let ids = Object.create(null);

        for (let i = 0, l = 100000; i < l; i += 1) {
            const id = uniqueId();

            assert.strictEqual(typeof id, 'string');
            assert.strictEqual(id.length, 8);
            assert.ok(/^\w+$/i.test(id));
            assert.ok(!ids[id]);

            ids[id] = true;
        }
    });

    it('Should support parameters oveloading', () => {
        assert.strictEqual(uniqueId(10, 'asd').length, 10);
    });
});
