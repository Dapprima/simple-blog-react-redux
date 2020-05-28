import React from "react";
import SinglePostContainer from "../containers/SinglePostContainer";
import CommentsContainer from "../containers/CommentsContainer";
import CreateCommentContainer from "../containers/CreateCommentContainer";

const SinglePost = (props) => {
  return (
    <>
      <SinglePostContainer postId={props.match.params.id} />
      <CreateCommentContainer postId={props.match.params.id} />
      <CommentsContainer postId={props.match.params.id} />
    </>
  );
};

export default SinglePost;
