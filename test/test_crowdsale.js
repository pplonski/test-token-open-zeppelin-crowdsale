require("babel-core/register");
require("babel-polyfill");

var Token = artifacts.require('./TestToken.sol')
var Crowdsale = artifacts.require("./TestTokenCrowdsale.sol");

contract('Crowdsale', function() {
  it("should buy token", async () => {
    const owner = web3.eth.accounts[0];
    const account1  = web3.eth.accounts[1];
    const amount = web3.toWei('1', 'ether');

    let crowdsale = await Crowdsale.deployed();
    token = Token.at(await crowdsale.token());
    let balance = await token.balanceOf.call(account1);
    assert.equal(balance.valueOf(), 0, "before buy");

    let tx = await crowdsale.buyTokens(account1,
                                        {value: amount,
                                         from: account1});

    balance = await token.balanceOf.call(account1);
    assert.equal(balance.valueOf(), 10000, "after buy");
  });
});
