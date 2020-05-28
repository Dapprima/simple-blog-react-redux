import { createSelector } from "reselect";

export const selectAllPosts = createSelector(
  (state) => state.posts.posts,
  (posts) => posts
);

export const selectLoadingStatus = createSelector(
  (state) => state.posts.loading,
  (loading) => loading
);

export const selectPostById = (postId) => (state) => {
  return state.posts.posts.filter((post) => post.id === parseInt(postId));
};

export const selectAllComments = createSelector(
  (state) => state.posts.comments,
  (comments) => comments
);
