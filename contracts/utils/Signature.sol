// SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "../library/Order.sol";

import "@openzeppelin/contracts-upgradeable/utils/cryptography/EIP712Upgradeable.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract Signature is EIP712Upgradeable {
    using ECDSA for bytes32;

    bytes32 public constant PrivilegedInformation_TYPEHASH =
        keccak256(
            "PrivilegedInformation(address privilegedCollection,uint256 privilegedTokenId)"
        );
    bytes32 constant ORDER_TYPEHASH =
        keccak256(
            "Order(address issuer,address nftAddress,address paymentToken,uint256 price,uint256 tokenId,uint256 end,uint256 kind,uint256 tokenKind,uint256 globalBidAmount,PrivilegedInformation privileges)PrivilegedInformation(address privilegedCollection,uint256 privilegedTokenId)"
        );

    function hash(Order memory order) internal pure returns (bytes32) {
        return
            keccak256(
                abi.encode(
                    ORDER_TYPEHASH,
                    order.issuer,
                    order.nftAddress,
                    order.paymentToken,
                    order.price,
                    order.tokenId,
                    order.end,
                    order.kind,
                    order.tokenKind,
                    order.globalBidAmount,
                    keccak256(
                        abi.encode(
                            PrivilegedInformation_TYPEHASH,
                            order.privileges.privilegedCollection,
                            order.privileges.privilegedTokenId
                        )
                    )
                )
            );
    }
    
    function verify(Order memory order, bytes memory _signature)
        public
        view
        returns (address)
    {
        return address(msg.sender);
    }
}