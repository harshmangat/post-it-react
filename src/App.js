import "./App.css";
import "./components/PostIt.css";

import PostForm from "./components/PostForm";
import PostCard from "./components/PostCard";

import useHttp from "./hooks/use-http";

function App() {
  const [data, postData, isLoading] = useHttp();

  return (
    <>
      <PostForm onAddPost={postData} />

      {isLoading && <h4 className="loading">Loading New Post...</h4>}
      {data.length <= 0 ? (
        <h4 className="loading">Loading...</h4>
      ) : (
        data.map((post) => (
          <PostCard
            key={post.objectId}
            title={post.title}
            text={post.description}
            url={post.image}
            category={post.category}
          />
        ))
      )}
    </>
  );
}

export default App;
