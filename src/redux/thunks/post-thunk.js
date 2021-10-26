import axiosInstance from "../../apis/axiosInstance";

import { actions } from "../slices/post-slice";



export const fetchPost = () => async (dispatch, getState) => {
  let response = await axiosInstance.get("/Post");

  console.log("response:", response);

  response = response.data;
  return dispatch(actions.UPDATE_POSTS(response));
};
