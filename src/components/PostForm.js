import React from "react";
import "./PostIt.css";

import { useForm } from "react-hook-form";

const PostForm = (props) => {
  const {
    register,
    handleSubmit,
  } = useForm();

  return (
    <header id="header">
      <h1 className="heading">POST IT</h1>
      <form id="form" onSubmit={handleSubmit((data) => props.onAddPost(data))}>
        <input id="title" placeholder="Title" {...register("title")} /> <br />
        <textarea
          id="paragraph"
          cols="20"
          rows="3"
          placeholder="Enter Your Text"
          max="180"
          {...register("description")}
        ></textarea>{" "}
        <br />
        <input
          type="url"
          id="url"
          placeholder="Enter Image URL"
          {...register("image")}
        />
        <input
          type="text"
          id="category"
          placeholder="Category"
          {...register("category")}
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
