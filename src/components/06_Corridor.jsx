import Gallery from "./07_Gallery";
const Corridor = ({message1,onReply}) => {
  return (
    <div>
      <h1>CORRIDOR</h1>
      <p>Message for you: {message1}</p>
      <Gallery message1={message1} onReply={onReply} />
    </div>
  )
};

export default Corridor;
