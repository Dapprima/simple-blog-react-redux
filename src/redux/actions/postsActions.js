import { GET_POSTS, GET_COMMENTS, CREATE_COMMENT, SET_LOADING } from "../types";
import * as api from "../../api/api";

const getPosts = (posts) => ({
  type: GET_POSTS,
  payload: posts,
});

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(setLoading(true));
    api.getPosts().then((resp) => {
      if (resp.error) {
        console.log(resp.error);
      } else {
        dispatch(getPosts(resp.data));
        dispatch(setLoading(false));
      }
    });
  };
};

const getComments = (comments) => ({
  type: GET_COMMENTS,
  payload: comments,
});

export const fetchComments = (postId) => {
  return (dispatch) => {
    dispatch(setLoading(true));
    api.getComments(postId).then((resp) => {
      if (resp.error) {
        console.log(resp.error);
      } else {
        dispatch(getComments(resp.data));
        dispatch(setLoading(false));
      }
    });
  };
};

const newComment = (comment) => ({
  type: CREATE_COMMENT,
  payload: comment,
});

export const createComment = (comment) => {
  return (dispatch) => {
    api.createComment(comment).then((resp) => {
      if (resp.error) {
        console.log(resp.error);
      } else {
        dispatch(newComment(resp.data));
      }
    });
  };
};

export const setLoading = (value) => ({
  type: SET_LOADING,
  payload: value,
});
