import Tower from "./02_Tower";
const Castle = ({message1,onReply}) => {
  return (
    <div>
      <h1>CastleRoom</h1>
      <p>Message For Jsd {message1}</p>
      <Tower message1={message1} onReply={onReply} />
    </div>
  )
  
};

export default Castle;
