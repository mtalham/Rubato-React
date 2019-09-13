import React from "react";
import { Redirect } from "react-router-dom";
import { getProfile, ROLE } from "./Utils";

const RouteRedirect = () => {
  const profile = getProfile();
  if (!profile) return <Redirect to="/" />;

  switch (profile.role) {
    case ROLE.ADMIN:
      return <Redirect to="/admin-page" />;
    case ROLE.USER:
      return <Redirect to="/user-profile-page" />;
    case ROLE.BAND:
      return <Redirect to="/band" />;
    default:
      return <Redirect to="/" />;
  }
};

export default RouteRedirect;
