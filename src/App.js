import React, { useState } from "react";
import "./App.css";
import "./components/PostForm";
import PostForm from "./components/PostForm";
import "./components/PostIt.css";
import PostCard from "./components/PostCard";

const postObj = [
  {
    id: "e1",
    title: "Title will be shown here",
    text: " Write some quote!",
    url: "https://images.unsplash.com/photo-1628626110189-f963f1ec6755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
    category: "Books",
  },
];

function App() {
  const [data, setData] = useState(postObj);

  const addNewPostHandler = (postData) => {
    setData((prevData) => {
      return [postData, ...prevData];
    });
  };
  return (
    <div>
      <PostForm newPost={addNewPostHandler}/>
      {data.map((post) => (
        <PostCard
          key={post.id}
          title={post.title}
          url={post.url}
          text={post.text}
          category={post.category}
        />
      ))}
    </div>
  );
}

export default App;
