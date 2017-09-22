var assert = require('assert');
describe('otrak', function() {
    var M = require('./manager')
    describe('login', function() {
    it('login(a, 1111)=undefined', function() {
      assert.equal('undefined', typeof(M.login('a', '1111')));
    });
    it('login(a, 1234).id=a', function() {
        assert.equal('a', M.login('a', '1234').id);
    });    
  });
});