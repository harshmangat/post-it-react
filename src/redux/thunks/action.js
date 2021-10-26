import axiosInstance from "../../apis/axiosInstance";

import { actions } from "../slices/post-slice";

/*<====FETCH DATA====> */
export const fetchData = () => async (dispatch, getState) => {
  let response = await axiosInstance.get("/Post");

  console.log("response:", response);

  response = response.data;
  return dispatch(actions.FETCH_POSTS(response.results));
};

/*<====POST DATA====> */
export const postData = (data) => async (dispatch, getState) => {
  let response = await axiosInstance.post("/Post", {
    data: {
      title: data.title,
      description: data.text,
      url: data.image,
      category: data.category,
    },
  });
  const newPostId = response.data.objectId;
  const fetchNewPost = await axiosInstance.get(`/Post/${newPostId}`);

  return dispatch(actions.ADD_POST(fetchNewPost));
};
