import React, { useEffect, useState } from 'react'

const Memos = ({state}) => {
const [memos,setMemos] = useState([])
const {contract} = state;

useEffect(() => {

  const memomessage = async() => {
   const memos = await contract.getMemos()
   setMemos(memos)
   console.log(memos)

  

  }
  contract && memomessage()
  
},[contract])

 



  return (
    <div>Memos</div>
  )
}

export default Memos