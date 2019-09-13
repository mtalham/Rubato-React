import React from "react";
import { getProfile } from "../utils/Utils";

const Band = () => {
  const profile = getProfile();
  console.log(profile);
  if (!profile) return null;

  return <div>Band page</div>;
};

export default Band;
