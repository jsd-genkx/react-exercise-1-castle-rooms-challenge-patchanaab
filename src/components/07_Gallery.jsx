import Nook from "./08_Nook.jsx";
const Gallery = ({message1,onReply}) => {
  return(
    <div>
      <h1>GALLERY</h1>
      <p>Message for you: {message1}</p>
      <Nook message1={message1} onReply={onReply} />
    </div>
  )
};

export default Gallery;
