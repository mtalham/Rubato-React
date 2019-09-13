import React, { useState } from "react";
import axios from "axios";
import { SubmitButton, SuggestRole, TextInput } from "../layout/FieldInput";

const RegisterBand = ({ history }) => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");
  //const [vipps, setVipps] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    axios
      .post("http://localhost:8080/api/register/signUp", {
        name: name,
        username: username,
        phone: phone,
        //vipps: vipps,
        password: password,
        confirmPassword: confirmPassword,
        about: about,
        price: price,
        role: role
      })
      .then(response => {
        console.log(response.data);
      });
    history.push("/login");
  };

  return (
    <div>
      <h6 className="center-align" style={{ marginBottom: "20px" }}>
        <b>Don't have an account yet, get yourself registered here.</b>
      </h6>
      <form onSubmit={handleSubmit}>
        <div className="container center-align">
          <SuggestRole value={role} onChange={e => setRole(e.target.value)} />
          {role && (
            <>
              <TextInput
                onChange={e => setName(e.target.value)}
                value={name}
                label={role === "band" ? "Band Name" : "Your Name"}
                name="band"
              />
              <TextInput
                value={username}
                onChange={event => setUsername(event.target.value)}
                label="Email"
                name="username"
              />
              <TextInput
                value={phone}
                onChange={event => setPhone(event.target.value)}
                label="Phone Number"
                name="phone"
              />
              <TextInput
                value={password}
                onChange={event => setPassword(event.target.value)}
                label="Password"
                name="password"
              />
              <TextInput
                value={confirmPassword}
                onChange={event => setConfirmPassword(event.target.value)}
                label="Confirm Password"
                name="confirmPassword"
              />
              {role === "band" && (
                <>
                  <div className="input-field col s12">
                    <textarea
                      id="about-input"
                      value={about}
                      name="about"
                      onChange={event => setAbout(event.target.value)}
                      required
                    />
                    <label htmlFor="about-input">
                      Write Description of Your Band
                    </label>
                  </div>
                  <TextInput
                    value={price}
                    onChange={event => setPrice(event.target.value)}
                    label="Booking Fee"
                    name="price"
                  />
                </>
              )}
              <SubmitButton name="Register" />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegisterBand;
