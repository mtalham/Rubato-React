import React, { useState } from "react";
import axios from "axios";
import { TextInput } from "../layout/FieldInput";
import { setJwtHeader } from "../utils/Utils";
import { SubmitButton } from "../layout/Buttons";
import Spinner from "../layout/Spinner";

const Login = ({ history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);
    axios
      .post("api/register/signIn", {
        username: username,
        password: password
      })
      .then(response => {
        setLoading(false);
        setJwtHeader(response.data.token);
        history.push("/");
      })
      .catch(err => {
        setLoading(false);
        setError(err.response.data);
      });
  };

  if (isLoading) return <Spinner/>;
  return (
    <div id="Login" className="input-field center-align">
      <h6>
        <b>If you are registered, login here.</b>
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="container center-align">
          <TextInput
            value={username}
            onChange={event => setUsername(event.target.value)}
            label="Username"
            name="username"
          />
          {error && <div style={{ color: "red" }}>{error.username}</div>}
          <TextInput
            value={password}
            onChange={event => setPassword(event.target.value)}
            label="Password"
            name="password"
          />
          {error && <div style={{ color: "red" }}>{error.password}</div>}
          <SubmitButton name="Login" />
        </div>
      </form>
    </div>
  );
};

export default Login;
