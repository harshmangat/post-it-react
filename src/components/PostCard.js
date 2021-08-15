import "./PostIt.css";

const PostCard = (props) => {
  return (
    <div className="post">
      <img className="img" src={props.url} alt='books'/>
      <h1 className="imgTitle">{props.title}</h1>
      <div className="para">
        <p className="text">{props.text}</p>
      </div>
      <button className="category">{props.category}</button>
    </div>
  );
}

export default PostCard;
