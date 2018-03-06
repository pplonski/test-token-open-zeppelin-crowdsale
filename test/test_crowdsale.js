require("babel-core/register");
require("babel-polyfill");

var Token = artifacts.require('./TestToken.sol')
var Crowdsale = artifacts.require("./TestTokenCrowdsale.sol");

contract('Crowdsale', function() {
  it("should buy token", async () => {
    const owner = web3.eth.accounts[0];
    const account1  = web3.eth.accounts[1];
    const amount = web3.toWei('0.01', 'ether');

    let crowdsale = await Crowdsale.deployed();
    let tx = await crowdsale.buyTokens(account1,
                                        {value: amount,
                                         from: account1});

  });
});
