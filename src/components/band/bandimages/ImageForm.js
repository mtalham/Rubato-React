import React, { useState } from "react";
import { client } from "../../utils/Utils";
import { TextInput } from "../../layout/FieldInput";
import { SubmitButton } from "../../layout/Buttons";

const ImageForm = ({ setShowForm, setRefetch }) => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    client()
      .post("http://localhost:8080/api/image/upload", {
        name: name,
        path: path,
        description: description
      })
      .then(() => {
        setShowForm(false);
        setRefetch(true);
      });
  };

  return (
    <div className="container center-align">
      <form onSubmit={handleSubmit}>
        <TextInput
          value={name}
          onChange={e => setName(e.target.value)}
          label="Image Name"
          name="name"
        />
        <TextInput
          value={path}
          onChange={e => setPath(e.target.value)}
          label="Image Link"
          name="path"
        />
        <TextInput
          value={description}
          onChange={e => setDescription(e.target.value)}
          label="Description"
          name="description"
        />
        <SubmitButton name={"Submit"} />
      </form>
    </div>
  );
};

export default ImageForm;
