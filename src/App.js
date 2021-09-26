import React, { useEffect, useState } from "react";
import "./App.css";
import "./components/PostForm";
import PostForm from "./components/PostForm";
import "./components/PostIt.css";
import PostCard from "./components/PostCard";
import useHttp from "./hooks/use-http";

// const postObj = [
//   {
//     id: "e1",
//     title: "Title will be shown here",
//     text: " Write some quote!",
//     url: "https://images.unsplash.com/photo-1628626110189-f963f1ec6755?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80",
//     category: "Books",
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  const {
    sendRequest: sendTaskRequest
  } = useHttp(); /*new useHttp state call for send request */

  /*<===GET request code=====> */
  useEffect(() => {
    const transformTasks = (data) => {
      const loadedTasks = data.results.reverse().map((data) => ({
        id: data.objectId,
        text: data.description,
        title: data.title,
        url: data.image,
        category: data.category
      }));
      setData(loadedTasks);
    };
    fetchTasks(
      {
        method: "get",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers: {
          "X-Parse-Application-Id": "MVV6avFp",
          "Content-Type": "application/json"
        }
      },
      transformTasks
    );
  }, [fetchTasks]);
  /* ===GET request code Ends===  */

  // const addNewPostHandler = (postData) => {
  //   setData((prevData) => {
  //     return [postData, ...prevData];
  //   });
  // };

  /*== send POST request code ==*/
  const createTask = (data) => {
    console.log("createTask", data);
    data.id = data.objectId;

    setData((prevTask) => [data, ...prevTask]);
  };
  const addNewPostHandler = async (data) => {
    sendTaskRequest(
      {
        method: "post",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers: {
          "X-Parse-Application-Id": "MVV6avFp",
          "Content-Type": "application/json"
        },
        body: {
          description: data.text,
          title: data.title,
          image: data.url,
          category: data.category
        }
      },
      (responseData) => {
        createTask({ ...data, ...responseData });
      }
    );
  };
  /*== send request code ends ==*/

  return (
    <div>
      <PostForm newPost={addNewPostHandler} />
      {data.map((post) => (
        <PostCard
          isLoading={isLoading}
          error={error}
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
