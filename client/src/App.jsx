import { useEffect, useState } from "react";
import abi from "./contractJson/web.json";
import { ethers } from "ethers";
// import "./App.css";
import Memos from "./components/Memos";
import Post from "./components/Post";

import { Box, Image, Text } from "@chakra-ui/react";

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });
  const [account, setAccount] = useState("Not connected");
  useEffect(() => {
    const template = async () => {
      const contractAddress = "0x621999B17fB696E5eCAc4F2F0e1531f0EE7B428E";
      const contractABI = abi.abi;
      //Metamask part
      //1. In order do transactions on goerli testnet
      //2. Metmask consists of infura api which actually help in connectig to the blockhain
      
      try {
        const { ethereum } = window;
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        setAccount(account);
        
        const provider = new ethers.providers.Web3Provider(ethereum) // read the blockchain
        const signer = provider.getSigner(); //write the blockchain

        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        setState({ provider, signer, contract });
      } catch (error) {
        console.log(error);
      }
    };
    template();
  }, []);
  return (
    <>
      <div>
        <Box>
          <Image src="./top.jpg"></Image>
          <Text align="end"> Connected account - {account} </Text>
        </Box>
        <Post state={state} />
        <Memos state={state}/>
      </div>
    </>
  );
}

export default App;
