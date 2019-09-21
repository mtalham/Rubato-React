import React, { useState } from "react";
import { Section } from "../../layout/Section";
import { IconButton } from "../../layout/Buttons";

const BandImages = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Section
      title={"Image Section"}
      button={
        <IconButton
          text={"Add image"}
          icon={"playlist_add"}
          classname="blue-grey"
          onClick={() => setShowForm(true)}
        />
      }
    >
      <div>Images will go here!!!</div>
    </Section>
  );
};

export default BandImages;
