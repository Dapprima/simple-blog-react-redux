import React from "react";
import classes from "./Comment.module.css";

const Comment = (props) => {
  return (
    <div className={classes.comment}>
      <p className={classes.commentBody}>{props.body}</p>
    </div>
  );
};

export default Comment;
