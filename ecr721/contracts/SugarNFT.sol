// SPDX-License-Identifier: kohekohe1221
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";


contract SugarNFT is ERC721URIStorage, Ownable {
  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  constructor() ERC721("SugarNFT03", "SRG"){}

  function safeMint(address to, string memory tokenURI) external onlyOwner returns (uint256) {
    //onlyOwnerにすることでコントラクトの所有者のみ呼び出し可能
    _tokenIds.increment();

    uint256 newTokenId = _tokenIds.current();
    _safeMint(to, newTokenId);
    _setTokenURI(newTokenId, tokenURI); //ERC721URIStorageだと使える

    return newTokenId;
  }

  function _baseURI() internal pure override returns (string memory) {
    return "https://ipfs.io/ipfs/";
  }

}