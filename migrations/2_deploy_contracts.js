var Token = artifacts.require("./TestToken.sol");
var Crowdsale = artifacts.require("./TestTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Crowdsale, 10**14, accounts[0]);
};
