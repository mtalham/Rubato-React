import React from "react";

export const CardHeader = ({ title, icon, onClick }) => (
  <div className="card">
    <div className="card-image">
      <span
        className="card-title blue-grey"
        style={{ width: "100%", fontWeight: "bold" }}
      >
        {title}
      </span>
      <button
        onClick={onClick}
        className="btn-floating halfway-fab waves-effect waves-light teal darken-4"
      >
        <i className="material-icons">{icon}</i>
      </button>
    </div>
  </div>
);

export const CardContent = ({ children }) => (
  <div className="card">
    <div className="card-content">{children}</div>
  </div>
);

