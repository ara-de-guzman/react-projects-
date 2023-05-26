import React, { useRef, useEffect, useState } from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import Alert from "../components/Alert";

function FormValidation() {
  let inputName = useRef(null);
  let inputEmail = useRef(null);
  let inputPassword = useRef(null);

  const [value, setValue] = useState({
    user_name: "",
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState(false);
  const [valid,setValid] = useState(false)

  const handleNameChange = (e) => {
    setValue({ ...value, user_name: e.target.value });
  };

  const handleEmailChange = (e) => {
    setValue({ ...value, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setValue({ ...value, password: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!value.user_name) {
      inputName.current.focus();
    } else if (!value.email) {
      inputEmail.current.focus();
    } else if (!value.password) {
      inputPassword.current.focus();
    }
    if(value.user_name && value.email && value.password){
        setValid(true)
    }
    setSubmit(true);
  };

  useEffect(() => {
    inputName.current.focus();
  }, []);

  const inputStyle = {
    margin: "20px 0",
  };
  return (
    <div className="m-auto">
      {submit && valid ? (
        <>
          <Alert
            type={"success"}
            message={"Registration was successful"}
            delay={true}
            delayTime={3000}
          />
          <Title text={"Welcome " + value.user_name} />
        </>
      ) : (
        <div className="container m-auto mt-4 p-2 shadow-sm border-5">
          <Title text={"Registration"} />
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter your name"
                ref={inputName}
                value={value.user_name}
                onChange={handleNameChange}
                style={inputStyle}
              />
              {submit && !value.user_name ? (
                <label className="text-danger fs-sm">
                  Please enter your name
                </label>
              ) : null}

              <input
                type="text"
                placeholder="Enter your email"
                ref={inputEmail}
                value={value.email}
                onChange={handleEmailChange}
                style={inputStyle}
              />
              {submit && !value.email ? (
                <label className="text-danger fs-sm">
                  Please enter your email
                </label>
              ) : null}

              <input
                type="text"
                placeholder="Enter your password"
                ref={inputPassword}
                value={value.password}
                onChange={handlePasswordChange}
                style={inputStyle}
              />
              {submit && !value.password ? (
                <label className="text-danger fs-sm">
                  Please enter your password
                </label>
              ) : null}
            </div>
            <Button
              btnClass={"btn-primary btn-lg btn-block"}
              text={"Register"}
            />
          </form>
        </div>
      )}
    </div>
  );
}

export default FormValidation;
