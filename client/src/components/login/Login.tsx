import React, { useState } from "react";
import FormInput from "../interface/FormInput";
import ErrorMessage from "../interface/ErrorMessage";
import { useForm } from "react-hook-form";
import { LoginService } from "../../services";
import classes from "../../assets/styles/Login.module.scss";

interface LoginProps {
  loginCallback: (setMode: Boolean) => void;
}

const Login = ({ loginCallback }: LoginProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [isEmail, setIsEmail] = useState(false);
  const [error, setError] = useState("");

  const submitEmail = handleSubmit((formData) => {
    setValue("password", "");
    setIsEmail(true);
  });

  const loginHandler = handleSubmit((formData) => {
    LoginService.login(formData.email, formData.password)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.data.msg) {
          setError(err?.response?.data?.msg);
        } else {
          setError(err?.response?.data?.errors[0]?.msg);
        }
      });
  });

  const changeToReg = () => {
    loginCallback(true);
  };

  const cancelForm = () => {
    setError("");
    setIsEmail(false);
  };

  return (
    <div className={classes.LoginForm}>
      <h2 className={classes.LoginHeader}>Login</h2>
      <div className={classes.FormComponent}>
        <form onSubmit={loginHandler} onReset={cancelForm}>
          {!isEmail ? (
            <FormInput
              register={register}
              required
              inputValue="email"
              placeholder="Enter Email"
              label="Email"
              type="email"
              autoComplete="new-email"
              errors={errors}
            />
          ) : (
            <FormInput
              required
              inputValue="password"
              placeholder="Enter Password"
              label="Password"
              type="password"
              register={register}
              autoComplete="new-password"
              errors={errors}
            />
          )}

          <div className={classes.ButtonArea}>
            {!isEmail ? (
              <button onClick={submitEmail}>Continue</button>
            ) : (
              <>
                <button type="reset" style={{ marginRight: "0.5rem" }}>
                  Cancel
                </button>
                <button
                  type="submit"
                  style={{
                    marginLeft: "0.5rem",
                    backgroundColor: "#0275d8",
                    color: "white",
                  }}
                >
                  Submit
                </button>
              </>
            )}
          </div>
          <div>
            <ErrorMessage message={error} />
          </div>
          <hr style={{ color: "white", marginTop: "2.5rem" }} />
          <p
            style={{ textAlign: "center", cursor: "pointer" }}
            onClick={changeToReg}
          >
            Dont have an Account? Please Register.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
