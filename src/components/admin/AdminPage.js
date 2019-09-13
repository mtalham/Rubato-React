import React, { useState, useEffect } from "react"; // useCallbck, useEffects hooks from React
import axios from "axios";
import css from "../../Users.module.scss";

const AdminPage = () => {
  const [users, setUsers] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/person/list-all", {
        headers: {
          Authorization: token
        }
      })
      .then(response => {
        console.log(response, "admin page");
        setUsers(response.data); // getting list of persons from data, see it in action in developer console
      });
  }, [token]);

  if (!token) return null;

  return (
    <div className="admin-page">
      {users &&
        users.map(user => (
          <div key={user.idPerson} className={css.root}>
            <div className={css.root}>{user.name}</div>
            <div className={css.root}>{user.username}</div>
            <div className={css.some}>{user.role}</div>
          </div>
        ))}
    </div>
  );
};

export default AdminPage;
