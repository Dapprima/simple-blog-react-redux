import React from "react";
import { useSelector } from "react-redux";

import { selectPostById } from "../redux/selectors/postsSelectors";
import SinglePost from "../components/SinglePost/SinglePost";

const SinglePostContainer = (props) => {
  const post = useSelector(selectPostById(props.postId));
  return <>{post && <SinglePost {...post[0]} />}</>;
};

export default SinglePostContainer;
