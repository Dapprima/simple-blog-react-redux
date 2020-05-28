import React from "react";
import { Link } from "react-router-dom";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <Link className={classes.postTitle} to={`/posts/${props.id}`}>
        {props.title}
      </Link>
      <div className={classes.postAuthor}>
        Author: {props.author || "anonymous"}
      </div>
      <div className={classes.postBody}>{props.body || "No text"}</div>
    </div>
  );
};

export default Post;
