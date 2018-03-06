var Token = artifacts.require("./TestToken.sol");
var Crowdsale = artifacts.require("./TestTokenCrowdsale.sol");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Crowdsale, 3*10**14, accounts[0]);
  //deployer.deploy(Token);
  //Token.deployed().then(function(instance) {
  //  deployer.deploy(Crowdsale, 3*10**14, accounts[0], 210000000, instance);
  //});
};
