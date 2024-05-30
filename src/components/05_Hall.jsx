import Corridor from "./06_Corridor";

const Hall = ({message1,onReply}) => {
  return(
    <div>
      <h1>HALL</h1>
      <p>Message for you: {message1}</p>
      <Corridor message1={message1} onReply={onReply} />
    </div>
  )
};

export default Hall;
