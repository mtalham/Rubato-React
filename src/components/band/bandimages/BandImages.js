import React, { useState } from "react";
import { Section } from "../../layout/Section";
import { IconButton } from "../../layout/Buttons";
import Modal from "../../layout/Modal";
import { Card } from "../../layout/Card";
import css from "../Band.module.scss";
import DeleteBandPopper from "../DeleteBandPopper";
import ImageForm from "./ImageForm";
import { client } from "../../utils/Utils";

const BandImages = ({ images, setRefetch }) => {
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
      <div className={css.bandVideos}>
        {images &&
          images.map(image => (
            <ImageCard image={image} refetch={setRefetch} key={image.idImage} />
          ))}
      </div>
      <Modal
        isOpen={showForm}
        title={"Add Image"}
        onClose={() => setShowForm(false)}
      >
        <ImageForm setShowForm={setShowForm} setRefetch={setRefetch} />
      </Modal>
    </Section>
  );
};

export default BandImages;

const ImageCard = ({ image, refetch }) => {
  const handleDelete = () => {
    client()
      .delete(`http://localhost:8080/api/image/delete/${image.idImage}`)
      .then(() => {
        refetch(true);
      });
  };

  return (
    <Card imageContent={<img src={image.path} alt="new" />}>
      <DeleteBandPopper onDelete={handleDelete} />
      <span className="card-title">{image.name}</span>
      <p>{image.description}</p>
    </Card>
  );
};