import { useState } from "react";

const SecretRoom = ({message1,onReply}) => {
  const [reply,setReply] = useState("");

  const sendReply = () => {
    onReply(reply);
  };
  return(
    <div>
      <h1>SecretRoom</h1>
      <p>Message For JSD7{message1}</p>
      <input 
      type="text" 
      value={reply} 
      onChange={(e)=>setReply(e.target.value)}
      />
      <button onClick={sendReply} >SEND IT!</button>
    </div>
  )
};

export default SecretRoom;
