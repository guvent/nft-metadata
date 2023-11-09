// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts-upgradeable/utils/ReentrancyGuardUpgradeable.sol";

import "./library/Order.sol";
import "./library/Event.sol";
import "./utils/Signature.sol";

contract Marketplace is ReentrancyGuardUpgradeable, Signature {
    
    // Ask Bid
    function acceptBid(
        Order memory order,
        bytes memory signature
    ) public nonReentrant isOrderValid(order, signature) {
        if (msg.sender == order.issuer) {
            revert Errors.CanNotBuyOwnedToken();
        }

        // _acceptBid(order, signature);
    }
    
    // Modifiers
    modifier isOrderValid(Order memory order, bytes memory signature) {
        if (order.end < block.timestamp) {
            revert Errors.OrderExpired();
        }
        if (order.issuer != verify(order, signature)) {
            revert Errors.WrongSignature();
        }
        // if (orderStatus[signature] != OrderStatus.NOT_PROCESSED) {
        //     revert Errors.AlreadyProcessed();
        // }
        // if (!paymentTokens[order.paymentToken]) {
        //     revert Errors.InvalidPaymentToken();
        // }
        _;
    }
}