import React from "react";
import css from "./Band.module.scss";

export const VideoCard = ({ src, videoName, title, description }) => {
  return (
    <div className="col s12 m6">
      <div className="card">
        <div className="card-image">
          <iframe
            src={src}
            frameBorder={0}
            allow="autoplay; encrypted-media"
            allowFullScreen
            title={videoName}
            width={"100%"}
          />
        </div>
        <div className="card-content">
          <a className="btn-floating right waves-effect waves-light red">
            <i className="material-icons">delete</i>
          </a>
          <span className="card-title">{title}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const BandVideos = ({ videos }) => {
  return (
    <div>
      {videos.map(video => (
        <div className={css.bandVideos}>
          <VideoCard
            title={video.name}
            src={video.path}
            description={video.type}
            videoName={video.idVideo}
            key={video.idVideo}
          />
        </div>
      ))}
    </div>
  );
};

export default BandVideos;
