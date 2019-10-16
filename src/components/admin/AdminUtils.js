import { client } from "../utils/Utils";

export const getAllUsers = () =>
  client()
    .get("api/person/list-all")
    .then(res => res.data);

export const deletePerson = id =>
  client()
    .delete(`api/person/delete/${id}`)
    .then(() => true);

export const searchPersons = searchTerm =>
  client()
    .get(`api/person/search/${searchTerm}`)
    .then(res => res.data);
