import SecretRoom from "./09_SecretRoom";

const Nook = ({message1,onReply}) => {
  return(
    <div>
      <h1>NOOK</h1>
      <p>Message for you: {message1}</p>
      <SecretRoom message1={message1} onReply={onReply} />
    </div>
  )
};

export default Nook;
