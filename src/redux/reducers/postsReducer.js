import { GET_POSTS, GET_COMMENTS, CREATE_COMMENT, SET_LOADING } from "../types";

const initialState = {
  posts: [],
  comments: [],
  loading: false,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case GET_COMMENTS:
      return {
        ...state,
        comments: [...action.payload],
      };
    case CREATE_COMMENT:
      return {
        ...state,
        comments: [action.payload, ...state.comments],
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
export default postsReducer;
