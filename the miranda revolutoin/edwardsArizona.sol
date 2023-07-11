pragma solidity ^0.8.0;

contract Miranda {

  struct Suspect {
    bool hasInvokedRightToCounsel;
    bool hasBeenGivenAccessToCounsel;
  }

  mapping(address => Suspect) suspects;

  function isInvokedRightToCounsel(address suspect) public view returns (bool) {
    return suspects[suspect].hasInvokedRightToCounsel;
  }

  function hasBeenGivenAccessToCounsel(address suspect) public view returns (bool) {
    return suspects[suspect].hasBeenGivenAccessToCounsel;
  }

  function invokeRightToCounsel(address suspect) public {
    suspects[suspect].hasInvokedRightToCounsel = true;
  }

  function giveAccessToCounsel(address suspect) public {
    suspects[suspect].hasBeenGivenAccessToCounsel = true;
  }

  function isInterrogationValid(address suspect, bool (hasBeenGivenAccessToCounsel) public view returns (bool) {
    if (suspects[suspect].hasInvokedRightToCounsel && !hasBeenGivenAccessToCounsel) {
      return false;
    } else {
      return true;
    }
  }
}