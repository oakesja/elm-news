/*eslint-disable */

'use strict';

var assert = require('assert'),
    selector = require('style-selector'),
    property = require('./');

describe('property', function () {
    it('should return an object', function () {
        var bodySelector = selector('body'),
            prop = property('font-family', 'Arial', bodySelector);
        assert(prop);
        assert.equal(prop.prop, 'font-family');
        assert.equal(prop.value, 'Arial');
        assert(prop.selector);
        assert.equal(prop.selector.text, 'body');
    });
});

describe('property.toString', function () {
    it('should return a css declaration', function () {
        var bodySelector = selector('body'),
            prop = property('font-family', 'Arial', bodySelector);
        assert.equal(prop.toString(), 'font-family: Arial;');
    });
});

describe('property.compare', function () {
    it('should return the more specific of two properties', function () {
        var bodySelector = selector('body'),
            h1Selector = selector('h1'),
            propA = property('font-family', 'Arial', bodySelector),
            propB = property('color', 'blue', h1Selector),
            winner = propA.compare(propB);
        assert.equal(winner.selector.text, 'h1');
    });
});
