import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchPosts } from "../redux/actions/postsActions";
import {
  selectAllPosts,
  selectLoadingStatus,
} from "../redux/selectors/postsSelectors";
import Loader from "../components/Layout/Loader/Loader";
import Post from "../components/Post/Post";

const PostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const loading = useSelector(selectLoadingStatus);
  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      {loading && <Loader />}
      {!loading && posts.map((post) => <Post {...post} key={post.id} />)}
    </>
  );
};

export default PostsContainer;
