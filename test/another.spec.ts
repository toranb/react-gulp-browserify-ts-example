///<reference path='../typings/node.d.ts' />
///<reference path='../typings/mocha.d.ts' />
///<reference path='../typings/chai.d.ts' />

var chai = require('chai');
var expect = chai.expect;
var Hat = require('./hat');

describe("another", function() {
    it("test", function() {
        var hat = new Hat("Another");
        var str = hat.go();
        expect(str).eql("Another");
    });
});
