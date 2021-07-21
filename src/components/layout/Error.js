import React from "react";
import classes from './Error.module.css';

const Error = () => {
  return (
    <div className={classes.errorDiv}>
      <div className={classes.smalldiv}>
        <p className={classes.errorText}>404 page does not exist <br /> 😢  </p>
      </div>
    </div>
  );
};

export default Error;
