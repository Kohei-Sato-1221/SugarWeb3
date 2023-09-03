// SPDX-License-Identifier: kohekohe1221
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


contract SugarNFT is ERC721, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  constructor() ERC721("SugarNFT", "SRG"){}

  function safeMint(address to) external returns (uint256) {
    _tokenIds.increment();

    uint256 newTokenId = _tokenIds.current();
    _safeMint(to, newTokenId);

    return newTokenId;
  }

  function _baseURI() internal pure override returns (string memory) {
    return "ipfs://QmfD2BB2BCVb8GgcwaL5FwtGf5ytYqKauKsT3BJqpQDZaC";
  }
}