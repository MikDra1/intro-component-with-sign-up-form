/* eslint-disable react/prop-types */
import { useEffect, useReducer, useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  emailAddress: "",
  password: "",
  firstNameError: false,
  lastNameError: false,
  emailAddressError: false,
  passwordError: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "update/firstName":
      return { ...state, firstName: action.payload };

    case "update/lastName":
      return { ...state, lastName: action.payload };

    case "update/emailAddress":
      return { ...state, emailAddress: action.payload };

    case "update/password":
      return { ...state, password: action.payload };

    case "submit/form":
      return {
        ...state,

        firstName: state.firstNameError ? state.firstName : "",
        lastName: state.lastNameError ? state.lastName : "",
        emailAddress: state.emailAddressError ? state.emailAddress : "",
        password: state.passwordError ? state.password : "",
      };

    case "check/form":
      return {
        ...state,
        firstNameError:
          !/^[a-zA-Z]+$/.test(state.firstName) || state.firstName === "",
        lastNameError:
          !/^[a-zA-Z]+$/.test(state.lastName) || state.lastName === "",
        emailAddressError:
          !/^(?!.*@.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            state.emailAddress
          ) || state.emailAddress === "",
        passwordError: state.password === "",
      };

    case "checkInitially/form":
      return {
        ...state,
        firstNameError:
          !/^[a-zA-Z]+$/.test(state.firstName) && state.firstName !== "",
        lastNameError:
          !/^[a-zA-Z]+$/.test(state.lastName) && state.lastName !== "",
        emailAddressError:
          !/^(?!.*@.*@)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
            state.emailAddress
          ) && state.emailAddress !== "",
        passwordError: false,
      };

    default:
      return state;
  }
}

function Form({ setIsFinished }) {
  const [
    {
      firstName,
      lastName,
      emailAddress,
      password,
      firstNameError,
      lastNameError,
      emailAddressError,
      passwordError,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(
    function () {
      dispatch({ type: "checkInitially/form" });
    },
    [firstName, lastName, emailAddress, password]
  );

  const [iconVisible, setIconVisible] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsFinished(false);
    dispatch({ type: "check/form" });

    if (
      firstNameError ||
      lastNameError ||
      emailAddressError ||
      passwordError ||
      firstName === "" ||
      lastName === "" ||
      emailAddress === "" ||
      password === ""
    ) {
      return;
    }

    setIsFinished(true);
    setTimeout(() => {
      setIsFinished(false);
    }, 5000);

    dispatch({ type: "submit/form" });
  }

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="bg-white w-11/12 mx-auto rounded-lg p-4 my-6 shadow-special sm:p-8 sm:my-0 sm:px-10"
    >
      <div className="space-y-4 sm:space-y-6">
        <div className={`relative ${firstNameError && "mb-10"}`}>
          <input
            type="text"
            placeholder="First Name"
            id="firstName"
            value={firstName}
            onChange={(e) =>
              dispatch({ type: "update/firstName", payload: e.target.value })
            }
            className={`input  ${firstNameError && "border-2 border-Red"} `}
          />
          {firstNameError && (
            <label
              className="absolute -bottom-7 right-0 text-Red italic text-sm"
              htmlFor="firstName"
            >
              {firstName === ""
                ? "First Name cannot be empty"
                : "The input format is incorrect"}
            </label>
          )}
          {firstNameError && (
            <img
              src="./images/icon-error.svg"
              alt=""
              className="absolute right-5 top-1/2 -translate-y-1/2"
            />
          )}
        </div>
        <div className={`relative ${lastNameError && "!mb-10"}`}>
          <input
            type="text"
            placeholder="Last Name"
            id="lastNameError"
            value={lastName}
            onChange={(e) =>
              dispatch({ type: "update/lastName", payload: e.target.value })
            }
            className={`input  ${lastNameError && "border-2 border-Red"}`}
          />
          {lastNameError && (
            <label
              className="absolute -bottom-7 right-0 text-Red italic text-sm"
              htmlFor="lastNameError"
            >
              {lastName === ""
                ? "Last Name cannot be empty"
                : "The input format is incorrect"}
            </label>
          )}
          {lastNameError && (
            <img
              src="./images/icon-error.svg"
              alt=""
              className="absolute right-5 top-1/2 -translate-y-1/2"
            />
          )}
        </div>
        <div className={`relative ${emailAddressError && "!mb-10"}`}>
          <input
            type="email"
            placeholder="Email Address"
            id="emailAddress"
            value={emailAddress}
            onChange={(e) =>
              dispatch({ type: "update/emailAddress", payload: e.target.value })
            }
            className={`input  ${emailAddressError && "border-2 border-Red"}`}
          />
          {emailAddressError && (
            <label
              className="absolute -bottom-7 right-0 text-Red italic text-sm"
              htmlFor="emailAddress"
            >
              {emailAddress === ""
                ? "Email Address cannot be empty"
                : "The input format is incorrect"}
            </label>
          )}
          {emailAddressError && (
            <img
              src="./images/icon-error.svg"
              alt=""
              className="absolute right-5 top-1/2 -translate-y-1/2"
            />
          )}
        </div>
        <div className={`relative ${passwordError && "!mb-10"}`}>
          <input
            type={iconVisible ? "text" : "password"}
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) =>
              dispatch({ type: "update/password", payload: e.target.value })
            }
            className={`input  ${passwordError && "border-2 border-Red"}`}
          />
          {passwordError && (
            <label
              className="absolute -bottom-7 right-0 text-Red italic text-sm"
              htmlFor="password"
            >
              {password === ""
                ? "Password cannot be empty"
                : "The input format is incorrect"}
            </label>
          )}
          <img
            onClick={() => setIconVisible((v) => !v)}
            src={
              passwordError
                ? "./images/icon-error.svg"
                : iconVisible
                  ? "./images/view.png"
                  : "./images/hide.png"
            }
            alt=""
            className="absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
      </div>

      <button
        type="submit"
        className="bg-Green w-full py-4 rounded-md uppercase text-white mt-6 font-semibold shadow-specialGreen active:shadow-specialGreenSmall duration-300 hover:bg-GreenLight"
      >
        claim your free trail
      </button>
      <p className="text-xs text-Grayish-Blue text-center mt-4 ">
        By clicking the button, you are agreeing to our
        <span className="text-Red font-semibold hover:underline hover:cursor-pointer">
          {" "}
          Terms and Services
        </span>
      </p>
    </form>
  );
}

export default Form;
