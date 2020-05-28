import React from "react";
import Spinner from "../../../assets/spinner.gif";
import classes from "./Loader.module.css";

const Loader = () => {
  return <img src={Spinner} className={classes.loader} alt="Loading..." />;
};

export default Loader;
