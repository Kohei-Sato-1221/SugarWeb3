// SPDX-Lisence-Identifier: kohekohe1221
pragma solidity ^0.8.17;

contract SugarContract {
    // external 外部から呼び出される
    // pure private的な意味
    // memory stringなどの可変長につける
    function getMessage() external pure returns (string memory) {
        return "This is Sugar's Smart Contract!!!";
    }
}