import React, { useState } from "react";
import "./PostIt.css";

const PostForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredText, setEnteredText] = useState("");
  const [enteredUrl, setEnteredUrl] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(enteredTitle)
  };
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
    // console.log(enteredText)
  };
  const urlChangeHandler = (event) => {
    setEnteredUrl(event.target.value);
    // console.log(enteredUrl)
  };
  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value);
    // console.log(enteredCategory)
  };

  const submitChangeHandler = (event) => {
    event.preventDefault();
    const postData = {
      title: enteredTitle,
      text: enteredText,
      url: enteredUrl,
      category: enteredCategory,
    };
    console.log(postData);
    setEnteredTitle("");
    setEnteredText("");
    setEnteredUrl("");
    setEnteredCategory("");
  };

  return (
    <header id="header">
      <h1 className="heading">POST IT</h1>
      <form id="form" onSubmit={submitChangeHandler}>
        <input
          id="title"
          value={enteredTitle}
          type="text"
          placeholder="Title"
          required
          onChange={titleChangeHandler}
        />{" "}
        <br />
        <textarea
          id="paragraph"
          value={enteredText}
          cols="20"
          rows="3"
          placeholder="Enter Your Text"
          max="180"
          required
          onChange={textChangeHandler}
        ></textarea>{" "}
        <br />
        <input
          type="url"
          value={enteredUrl}
          id="url"
          placeholder="Enter Image URL"
          onChange={urlChangeHandler}
        />
        <input
          type="text"
          value={enteredCategory}
          id="category"
          placeholder="Category"
          required
          onChange={categoryChangeHandler}
        />{" "}
        <br />
        <button id="post" type="submit">
          Post It
        </button>
      </form>
    </header>
  );
};

export default PostForm;
