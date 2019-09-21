import React from "react";
import DeleteVideoPopper from "./DeleteVideoPopper";
import { client } from "../../utils/Utils";

const VideoCard = ({ src, videoId, title, description, refetch }) => {
  const handleDelete = () => {
    client()
      .delete(`http://localhost:8080/api/video/delete/${videoId}`)
      .then(() => {
        refetch(true);
      });
  };

  return (
    <div className="card">
      <div className="card-image">
        <iframe
          src={src}
          frameBorder={0}
          allow="autoplay; encrypted-media"
          allowFullScreen
          title={videoId}
          width={"100%"}
        />
      </div>
      <div className="card-content">
        <DeleteVideoPopper onDelete={handleDelete} />
        <span className="card-title">{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default VideoCard;
