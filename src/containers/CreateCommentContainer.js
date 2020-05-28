import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { createComment } from "../redux/actions/postsActions";
import CreateCommentForm from "../components/CreateCommentForm/CreateCommentForm";

const CreateCommentContainer = (props) => {
  const dispatch = useDispatch();
  const [body, setBody] = useState("");
  const [submit, setSubmit] = useState(false);
  const onChangeHandler = (e) => {
    setBody(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setSubmit(true);
    if (body) {
      const comment = {
        postId: props.postId,
        id: Date.now(),
        body: body,
      };
      dispatch(createComment(comment));
      setBody("");
      setSubmit(false);
    }
  };

  return (
    <CreateCommentForm
      body={body}
      onChangeHandler={onChangeHandler}
      submitHandler={submitHandler}
      submit={submit}
    />
  );
};

export default CreateCommentContainer;
