import React from "react";

export const TextInput = ({ value, onChange, name, label, required, icon }) => (
  <div className="input-field col s6">
    {icon && <i className="material-icons prefix">{icon}</i>}
    <input
      type="text"
      id={`${name}-input`}
      value={value}
      onChange={onChange}
      required={required}
    />
    <label htmlFor={`${name}-input`}>{label}</label>
  </div>
);

TextInput.defaultProps = {
  required: true
};

export const SuggestRole = ({ value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="browser-default center-align"
  >
    <option disabled value="">
      Choose your role
    </option>
    <option value="user">USER</option>
    <option value="band">BAND</option>
  </select>
);
