///<reference path='../typings/node.d.ts' />
///<reference path='../typings/mocha.d.ts' />
///<reference path='../typings/chai.d.ts' />

var chai = require('chai');
var expect = chai.expect;
var Hat = require('../src/hat');

describe("hello", function() {
    it("world", function() {
        var hat = new Hat("World");
        var str = hat.go();
        expect(str).eql("World");
    });
});
