// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

/// @custom:security-contact admin@deneme.io
contract MyToken is ERC721, ERC721URIStorage, ERC721Pausable, Ownable {
    constructor(
        address initialOwner
    ) ERC721("MyToken", "MTK") Ownable(initialOwner) {}

    function contractURI() public pure returns (string memory) {
        return "ipfs://QmPESj6Tc7tZcbnaWxntTjETaunTS9YYBpFgmuo945YyCP";
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs://QmPESj6Tc7tZcbnaWxntTjETaunTS9YYBpFgmuo945YyCP";
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function safeMint(address to, uint256 tokenId) public onlyOwner {
        string memory uri = string.concat(
            "ipfs://QmSeKHh1s9w1LLrBDsqRmCpsjmGZX3mc63pVPg6i88kAJx/",
            Strings.toString(tokenId)
        );
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function _update(
        address to,
        uint256 tokenId,
        address auth
    ) internal override(ERC721, ERC721Pausable) returns (address) {
        return super._update(to, tokenId, auth);
    }

    function tokenURI(
        uint256 tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
