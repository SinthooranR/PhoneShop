import React from "react";
import classes from "../../assets/styles/Form.module.scss";

const ErrorMessage = ({ message }: any) => {
  return (
    <>
      {message && (
        <div style={{ textAlign: "center" }} className={classes.Error}>
          {message}
        </div>
      )}
    </>
  );
};

export default ErrorMessage;
