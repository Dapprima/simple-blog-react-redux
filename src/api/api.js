import axios from "axios";

const instance = axios.create({
  baseURL: "https://simpleblogapi.herokuapp.com",
});

export const getPosts = () => {
  return instance
    .get("/posts")
    .then((resp) => ({ data: resp.data }))
    .catch((error) => ({
      error: error.message,
    }));
};
export const getComments = (postId) => {
  return instance
    .get(`/comments?postId=${postId}`)
    .then((resp) => ({ data: resp.data }))
    .catch((error) => ({
      error: error.message,
    }));
};

export const createComment = (comment) => {
  return instance
    .post("/comments", comment)
    .then((resp) => ({ data: resp.data }))
    .catch((error) => ({
      error: error.message,
    }));
};
