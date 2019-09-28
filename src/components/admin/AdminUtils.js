import { client } from "../utils/Utils";

export const getAllUsers = () =>
  client()
    .get("http://localhost:8080/api/person/list-all")
    .then(res => res.data);

export const deletePerson = (id) =>
  client()
    .delete(`http://localhost:8080/api/person/delete/${id}`)
    .then(() => true);
