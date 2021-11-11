import React, { useRef, useState } from "react";
import FormInput from "../interface/FormInput";
import ErrorMessage from "../interface/ErrorMessage";
import { useForm } from "react-hook-form";
import { LoginService } from "../../services";
import { useHistory } from "react-router";
import classes from "../../assets/styles/Login.module.scss";

interface RegisterProps {
  registerCallback: (setMode: Boolean) => void;
}

const Register = ({ registerCallback }: RegisterProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm();
  const history = useHistory();

  const password = useRef({});
  password.current = watch("password", "");

  const [error, setError] = useState("");
  const [isEmail, setIsEmail] = useState(false);

  const submitEmail = handleSubmit((formData) => {
    setValue("password", "");
    setValue("confirmPassword", "");
    setIsEmail(true);
  });

  const registerHandler = handleSubmit((formData) => {
    LoginService.register(formData.name, formData.email, formData.password)
      .then((res) => {
        history.push("/redirect");
      })
      .catch((err) => {
        if (err.response.data.msg) {
          setError(err?.response?.data?.msg);
        } else {
          setError(err?.response?.data?.errors[0]?.msg);
        }
      });
  });

  const changeToLogin = () => {
    registerCallback(false);
  };

  const cancelForm = () => {
    setError("");
    setIsEmail(false);
  };

  return (
    <div className={classes.LoginForm}>
      <h2 className={classes.RegisterHeader}>Register</h2>
      <div className={classes.FormComponent}>
        <form onSubmit={registerHandler} onReset={cancelForm}>
          {!isEmail ? (
            <>
              <FormInput
                register={register}
                required
                inputValue="name"
                placeholder="Enter Name"
                label="Your Name"
                type="text"
                errors={errors}
              />

              <FormInput
                register={register}
                required
                inputValue="email"
                placeholder="Enter Email"
                label="Email"
                type="email"
                errors={errors}
              />
            </>
          ) : (
            <>
              <FormInput
                register={register}
                required
                inputValue="password"
                placeholder="Enter Password"
                label="Password"
                type="password"
                errors={errors}
              />

              <FormInput
                register={register}
                required
                inputValue="confirmPassword"
                placeholder="Confirm Password"
                label="Confirm Password"
                type="password"
                errors={errors}
                validate={(value) =>
                  value === password.current || "The passwords do not match"
                }
              />
            </>
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
            onClick={changeToLogin}
          >
            Have an Account? Please Login.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
