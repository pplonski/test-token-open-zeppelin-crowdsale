pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";

import "./TestToken.sol";

contract TestTokenCrowdsale is Crowdsale {

  function TestTokenCrowdsale(uint256 _rate, address _wallet, MintableToken _token) public
    Crowdsale(_rate, _wallet, _token) { 
  }

}
