import {
  ADD_POST_ERROR,
  ADD_POST_LOADING,
  ADD_POST_SUCCESS,
  EDIT_POST_ERROR,
  EDIT_POST_LOADING,
  EDIT_POST_SUCCESS,
  DELETE_POST_ERROR,
  DELETE_POST_LOADING,
  DELETE_POST_SUCCESS,
  FETCH_POST_ERROR,
  FETCH_POST_LOADING,
  FETCH_POST_SUCCESS,
} from "./types";
import axios from "axios";
import { history } from "../index";

const url =
  "http://malih-auth.ap-southeast-2.elasticbeanstalk.com/campaign/getAllUploadedEmails/listId/480";

//CREATE

export const createPostSuccess = (data) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: data,
  };
};

export const createPostsLoading = (data) => {
  return {
    type: ADD_POST_SUCCESS,
    payload: data,
  };
};

export const createPostsError = (data) => {
  return {
    type: ADD_POST_ERROR,
    payload: data,
  };
};

export const createPost = (post) => {
  const data = {
    name: post.name,
    email: post.email,
    address: post.address,
    phoneNumber: post.phoneNumber,
    jobTitle: post.jobTitle,
  };
  return (dispatch) => {
    return axios
      .post(url, data)
      .then((response) => {
        const id = response.data;

        axios
          .get("${url}/${id}")
          .then((response) => {
            const data = response.data;
            const normalizedData = {
              id: post.id,
              name: post.name,
              email: post.email,
              address: post.address,
              phoneNumber: post.phoneNumber,
              jobTitle: post.jobTitle,
            };

            dispatch(createPostSuccess(normalizedData));
            history.push("/");
          })
          .catch((error) => {
            const errorPayload = {};
            errorPayload["message"] = error.response.data;
            errorPayload["status"] = error.response.status;

            dispatch(createPostsError(errorPayload));
          });
      })
      .catch((error) => {
        const errorPayload = {};
        errorPayload["message"] = error.response.data;
        errorPayload["status"] = error.response.status;

        dispatch(createPostsError(errorPayload));
      });
  };
};

//EDIT

//DELETE

//FETCH

export const fetchPostsSuccess = (data) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data,
  };
};

export const fetchPostsLoading = (data) => {
  return {
    type: FETCH_POST_LOADING,
    payload: data,
  };
};

export const fetchPostsError = (data) => {
  return {
    type: FETCH_POST_ERROR,
    payload: data,
  };
};

const normalizeResponse = (data) => {
  const arr = data.map((item) => {
    const keys = Object.keys(item);

    keys.forEach((k) => {
      item[k.toLowerCase()] = item[k];
      delete item[k];
    });
    return item;
  });
  return arr;
};

export const fetchPosts = () => async (dispatch) => {
  let isLoading = true;
  dispatch(fetchPostsLoading(isLoading));
  try {
    const response = await axios.get(url);
    const data = normalizeResponse(response.data);
    dispatch(fetchPostsSuccess(data));
    isLoading = false;
    dispatch(fetchPostsLoading(isLoading));
  } catch (error) {
    const errorPayload = {};
    errorPayload["message"] = error.response.data.message;
    errorPayload["status"] = error.response.status;

    dispatch(fetchPostsError(errorPayload));
    isLoading = false;
    dispatch(fetchPostsLoading(isLoading));
  }
};
