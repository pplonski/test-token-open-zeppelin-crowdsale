pragma solidity ^0.4.18;

import "zeppelin-solidity/contracts/crowdsale/validation/CappedCrowdsale.sol";
import "zeppelin-solidity/contracts/crowdsale/emission/MintedCrowdsale.sol";

import "./TestToken.sol";

contract TestTokenCrowdsale is MintedCrowdsale {

  ERC20 _token = new TestToken();

  function TestTokenCrowdsale(uint256 _rate, address _wallet) public
    Crowdsale(_rate, _wallet, _token) {
  }

  function _getTokenAmount(uint256 _weiAmount) internal view returns (uint256) {
    return _weiAmount.div(rate);
  }

}
