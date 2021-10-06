import { useState, useEffect } from "react";

import axiosInstance from "../apis/axiosInstance";

const useHttp = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    const response = await axiosInstance.get("/classes/PostIt", {
      params: {
        limit: 5,
      },
    });
    setData(response.data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const postData = async (data) => {
    setIsLoading(true);
    const response = await axiosInstance.post("/classes/PostIt", data);
    const newPostId = response.data.objectId;
    const fetchNewPost = await axiosInstance.get(
      `/classes/PostIt/${newPostId}`
    );
    setData((prevData) => [fetchNewPost.data, ...prevData]);
    setIsLoading(false);
  };

  return [data, postData, isLoading];
};

export default useHttp;
