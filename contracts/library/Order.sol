// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

enum OrderStatus {
    NOT_PROCESSED,
    FILLED,
    CANCELED
}

enum OrderKind {
    BID,
    LIST
}

enum TokenKind {
    ERC721,
    ERC1155
}


struct PrivilegedInformation {
    address privilegedCollection;
    uint256 privilegedTokenId;
}


struct Order {
    address issuer;
    address nftAddress;
    address paymentToken;
    uint256 price;
    uint256 tokenId;
    uint256 end;
    OrderKind kind;
    TokenKind tokenKind;
    uint256 globalBidAmount;
    PrivilegedInformation privileges;
}
