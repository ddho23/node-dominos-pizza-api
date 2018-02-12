'use strict';

var mocha = require('mocha');
var expect = require('chai').expect;
var Store = require('../src/Store');

describe('Store', function() {
  const STORE_ID = '10310';

  it('should create store', function(done) {
    var newStore = new Store({
      ID: STORE_ID
    });

    expect(newStore.ID).to.equal(STORE_ID);

    done();
  });
  it('should get info', function(done) {
    var newStore = new Store({
      ID: STORE_ID
    });

    newStore.getInfo(function(info) {
      expect(info).to.exist;
      expect(info.result).to.exist;
      expect(info.result.StoreID).to.equal(STORE_ID);

      done();
    });
  });
  it('should get menu', function(done) {
    var newStore = new Store({
      ID: STORE_ID
    });

    newStore.getMenu(function(menu) {
      expect(menu).to.exist;
      expect(menu.getRaw().result).to.exist;
      expect(menu.getRaw().result.Misc.StoreID).to.equal(STORE_ID);

      done();
    });
  });
  it('should get all friendly item names from menu', function(done) {
    var newStore = new Store({
      ID: STORE_ID
    });

    newStore.getFriendlyNames(function(mapping) {
      expect(mapping).to.exist;
      expect(mapping.result).to.exist;
      expect(mapping.result).to.have.length.above(1);

      done();
    });
  });
})
