//SPDX-License-Identifier:MIT
pragma solidity 0.8.19;

contract web{
  
  address payable owner;
  struct Memo{
    string name;
    address from;
    string massage;
    uint timestamp;
  }

 Memo[] memos;

 constructor() payable {
    owner=payable(msg.sender);
 }

 function setmsg(string calldata name, string calldata massage) external payable {
    require(msg.value>0,"need some amount");
    owner.transfer(msg.value);
    memos.push(Memo(name,msg.sender,massage,block.timestamp));

 }

 function getMemos() public view returns(Memo[] memory){
        return memos;
    }

}