import Room from "./04_Room";

const Chamber = ({message1,onReply}) => {
  
  return(
    <div>
      <h1>CHAMBER</h1>
      <p>Message for you: {message1}</p>
      <Room message1={message1} onReply={onReply} />
    </div>
  )
};

export default Chamber;
