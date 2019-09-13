import jsonwebtoken from "jsonwebtoken";

export const ROLE = {
  ADMIN: "admin",
  USER: "user",
  BAND: "band"
};

export const decodeToken = token =>
  token &&
  jsonwebtoken.decode(token.slice(7), {
    complete: true
  });

export const getProfile = () => {
  const token = decodeToken(localStorage.getItem("token"));
  return token ? token.payload : false;
};
