import React, { useState } from "react";
import { TextInput } from "../../layout/FieldInput";
import {client, createYouTubeEmbedLink} from "../../utils/Utils";
import { SubmitButton } from "../../layout/Buttons";

const VideoForm = ({ setShowForm, setRefetch }) => {
  const [name, setName] = useState("");
  const [path, setPath] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    client()
      .post("http://localhost:8080/api/video/upload", {
        name: name,
        path: createYouTubeEmbedLink(path),
        type: description
      })
      .then(() => {
        setShowForm(false);
        setRefetch(4);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput
        value={name}
        onChange={e => setName(e.target.value)}
        label="Video Name"
        name="name"
      />
      <TextInput
        value={path}
        onChange={e => setPath(e.target.value)}
        label="Video Link"
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
  );
};

export default VideoForm;
