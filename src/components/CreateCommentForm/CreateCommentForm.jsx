import React from "react";
import classes from "./CreateCommentForm.module.css";

const CreateCommentForm = (props) => {
  return (
    <form
      onSubmit={(e) => props.submitHandler(e)}
      className={classes.commentForm}
    >
      <textarea
        name="comment-body"
        id="comment-body"
        className={classes.commentBody}
        cols="40"
        rows="5"
        value={props.body}
        onChange={(e) => props.onChangeHandler(e)}
      />
      {props.submit && !props.body && (
        <label htmlFor="comment-body" className={classes.errorMessage}>
          Please enter a message
        </label>
      )}
      <button type="submit" className={classes.commentSubmitButton}>
        Comment
      </button>
    </form>
  );
};

export default CreateCommentForm;
