import "./PostIt.css";

const PostCard = (props) => {
  return (
    <div className="post">
      <img className="img" src={props.items[0].url} alt='books'/>
      <h1 className="imgTitle">{props.items[0].title}</h1>
      <div className="para">
        <p className="text">{props.items[0].text}</p>
      </div>
      <button className="category">{props.items[0].category}</button>
    </div>
  );
}

export default PostCard;
