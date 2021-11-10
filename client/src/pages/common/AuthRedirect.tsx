import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router";
import { LoginService } from "../../services";
import classes from "../../assets/styles/Login.module.scss";

const AuthRedirect = () => {
  const [timer, setTimer] = useState(false);
  const history = useHistory();
  const user = LoginService.getUser();

  useEffect(() => {
    setTimeout(() => setTimer(true), 3500);
  }, []);

  return (
    <>
      {!user ? (
        <div className={classes.Redirect}>
          <div className={classes.Card}>
            <div>
              <h3>Successfully Registered</h3>
              <p style={{ marginTop: "1rem" }}>
                Will be Redirected automatically
              </p>
              <hr style={{ color: "white", marginTop: "1.5rem" }} />
              <p
                style={{ textAlign: "center", cursor: "pointer" }}
                onClick={() => history.push("/login")}
              >
                Click here to Redirect to Login.
              </p>
            </div>
          </div>
          {timer && <Redirect to={"/login"} />}
        </div>
      ) : (
        <Redirect to="/products" />
      )}
    </>
  );
};

export default AuthRedirect;
