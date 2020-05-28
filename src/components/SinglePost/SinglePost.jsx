import React from "react";
import classes from "./SinglePost.module.css";

const SinglePost = (props) => {
  return (
    <div className={classes.singlePost}>
      <h2 className={classes.singlePostTitle}>{props.title}</h2>
      <small className={classes.singlePostAuthor}>
        Author: {props.author || "Anonymous"}
      </small>
      <p className={classes.singlePostBody}>{props.body || "No text"}</p>
    </div>
  );
};

export default SinglePost;
