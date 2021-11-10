import React from "react";
import classes from "../../assets/styles/Form.module.scss";

interface InputProps {
  register: any;
  inputValue: any;
  label?: String;
  minLength?: Number;
  pattern?: String;
  maxLength?: Number;
  min?: Number;
  type?: String;
  placeholder?: String;
  errors: any;
  required?: Boolean;
  autoComplete?: String;
  defaultValue?: any;
  setNewValue?: any;
  onChange?: () => void;
  validate?: (value: any) => any;
}

const FormInput = ({
  register,
  inputValue,
  label,
  minLength,
  pattern,
  maxLength,
  validate,
  min,
  placeholder,
  type,
  errors,
  required,
  autoComplete,
  defaultValue,
  setNewValue,
}: InputProps) => {
  return (
    <div className={classes.FormInput}>
      {label && <label>{label}</label>}
      <div>
        <input
          autoComplete={defaultValue && "new-input"}
          name={inputValue}
          id={inputValue}
          type={type}
          placeholder={placeholder}
          {...register(inputValue, {
            required: required,
            minLength: minLength,
            pattern: pattern, // /^[A-Za-z]+$/i
            maxLength: maxLength,
            validate: validate,
            min: min,
            onChange: () => setNewValue,
          })}
          defaultValue={defaultValue}
        />
      </div>

      {errors[inputValue]?.type === "required" && (
        <div className={classes.Error}>
          {label ? label + " " : "This field"}is required!
        </div>
      )}

      {errors[inputValue]?.type === "pattern" && (
        <div className={classes.Error}>
          {label ? label + " must " : "Must"} be in the Correct Format
        </div>
      )}
      {errors[inputValue]?.type === "minLength" && (
        <div className={classes.Error}>
          {label ? label + " must " : "Must"} be at least {minLength} Characters
        </div>
      )}
      {errors[inputValue]?.type === "maxLength" && (
        <div className={classes.Error}>
          {label ? label + " cannot " : "Cust"} exceed {maxLength} characters!
        </div>
      )}
      {errors[inputValue]?.type === "min" && (
        <div className={classes.Error}>
          {label ? label + " cannot " : "Cannot"} be less than {min}
        </div>
      )}
      {inputValue === "confirmPassword" &&
        errors[inputValue]?.type === "validate" && (
          <div className={classes.Error}>Passwords do not Match</div>
        )}
    </div>
  );
};

export default FormInput;
