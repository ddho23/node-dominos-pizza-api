'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var util = require('../src/Utilities');

describe('Utilities', function() {
    describe('FindStores', function() {
        const ADDRESS = '25 Union St, Kingston, ON, K7L2N8';
        it('should find nearby stores that deliver', function(done) {
            util.findNearbyStores(ADDRESS, 'Delivery', function(result) {
                expect(result).to.exist;
                expect(result.result.Stores).to.have.length.above(0);

                done();
            });
        });

        it('should find nearby stores that carryout', function(done) {
            util.findNearbyStores(ADDRESS, 'Carryout', function(result) {
                expect(result).to.exist;
                expect(result.result.Stores).to.have.length.above(0);

                done();
            });
        })
    })
});
