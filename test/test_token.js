require("babel-core/register");
require("babel-polyfill");
var Token = artifacts.require('./TestToken.sol')

contract('Token', function() {
  it("should be initialized", async () => {
    let token = await Token.deployed();
    let name = await token.name.call();
    let symbol = await token.symbol.call();
    let decimals = await token.decimals.call();
    assert.equal(name, "Test Token", "should be equal");
    assert.equal(symbol, "TTT", "should be equal");
    assert.equal(decimals, 18, "should be equal");
  });
});
