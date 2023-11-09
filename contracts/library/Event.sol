// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;


interface Errors {
    error Unauthorized();
    error WrongSignature();
    error AlreadyProcessed();
    error WrongOrderKind();
    error WrongTokenKind();
    error CanNotBuyOwnedToken();
    error OrderExpired();
    error TokenTransferFailed();
    error InvalidPaymentToken();
    error NotEnoughGlobalBids();
    error CollectionIsNotPrivileged();
    error ExceedsMaxRoyaltyPercentage();
    error AlreadyDefined();
    error CannotAddRoyalties();
    error UnsufficientTreasuryFunds();
}