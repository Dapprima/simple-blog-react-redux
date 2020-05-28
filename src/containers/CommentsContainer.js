import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchComments } from "../redux/actions/postsActions";
import {
  selectAllComments,
  selectLoadingStatus,
} from "../redux/selectors/postsSelectors";
import Loader from "../components/Layout/Loader/Loader";
import Comment from "../components/Comment/Comment";

const PostsContainer = (props) => {
  const dispatch = useDispatch();
  const comments = useSelector(selectAllComments);
  const loading = useSelector(selectLoadingStatus);
  useEffect(() => {
    dispatch(fetchComments(props.postId));
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading &&
        comments.map((comment) => <Comment {...comment} key={comment.id} />)}
    </>
  );
};

export default PostsContainer;
