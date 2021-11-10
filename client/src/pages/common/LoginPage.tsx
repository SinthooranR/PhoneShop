import React, { useState } from "react";
import Image from "../../assets/images/LoginImage.jpg";
import Login from "../../components/login/Login";
import Register from "../../components/login/Register";
import { Redirect } from "react-router";
import { LoginService } from "../../services";
import classes from "../../assets/styles/Login.module.scss";

const LoginPage = () => {
  const user = LoginService.getUser();
  const [isRegister, setIsRegister] = useState(false);
  return (
    <>
      {!user ? (
        <div className={classes.Login}>
          <div className={classes.MainPanel}>
            <div className={classes.Grid}>
              <img src={Image} alt="brand" />
              {!isRegister ? (
                <Login loginCallback={(res) => setIsRegister(Boolean(res))} />
              ) : (
                <Register
                  registerCallback={(res) => setIsRegister(Boolean(res))}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/products" />
      )}
    </>
  );
};

export default LoginPage;
