import React, { useState } from "react";
import { ethers } from "ethers";

import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

const Post = ({state}) => {
  const [isThisLoading, setIsLoading] = useState(false);
  
 
   const posting = async(event) => {
    setIsLoading(true);
    event.preventDefault();
   const {contract} = state;
   const name = document.querySelector("#name").value;
   const message = document.querySelector("#message").value;
   const amount = {value:ethers.utils.parseEther("0.001")}
   let tx = await contract.setmsg(name, message, amount);
   await tx.wait()
   await tx.wait(setIsLoading(false))
   alert("transaction succesfull")
   window.location.reload();

   }
 



  return (
    <div>
      <Box boxSize="sm" pt="100px" marginLeft="35%" marginRight="25%">
        <FormControl>
          <FormLabel>Enter Your Name</FormLabel>
          <Input id="name" type="name" />
          <FormHelperText fontSize="10px">
            We'll never share your identity
          </FormHelperText>
          <FormLabel pt="10px">Enter Your Thought</FormLabel>
          <Input id="message" type="text" />
        </FormControl>
        
        <Button
          onClick={posting}
          isLoading={isThisLoading}
          mt="12px" width="100%"
          loadingText="Submitting"
          colorScheme="teal"
          variant="outline"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Post;
