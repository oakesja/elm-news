/*eslint-disable */

'use strict';

var assert = require('assert'),
    sel = require('./');

describe('selector', function () {
    it('should return an object', function () {
        var selector = sel('body', [ 0, 0, 0, 1 ]);
        assert(selector);
        assert.equal(selector.text, 'body');
        assert.deepEqual(selector.spec, [ 0, 0, 0, 1 ]);
    });
});

describe('selector.parsed', function () {
    it('should get parsed selector', function () {
        var selector = sel('body');
        assert(selector.parsed());
        assert.equal(selector.parsed()['0'].tag, 'body');
        assert.equal(selector.parsed().length, 1);
    });
});

describe('selector.specificity', function () {
    it('should get specificity', function () {
        var selector = sel('body');
        assert.deepEqual(selector.specificity(), [ 0, 0, 0, 1 ]);
    });
});
