import React from "react";
import css from "./Band.module.scss";
import { createYouTubeEmbedLink } from "../utils/Utils";
import { IconButton } from "../layout/Buttons";
import { Section } from "../layout/Section";

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
          <IconButton
            onClick={() => {}}
            icon={"delete"}
            classname="right red btn-floating"
          />
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
      <Section
        title={"Video Section"}
        button={
          <IconButton
            text={"Add video"}
            icon={"playlist_add"}
            classname="blue-grey"
          />
        }
      >
        {videos.map(video => (
          <div className={css.bandVideos} key={video.idVideo}>
            <VideoCard
              title={video.name}
              src={createYouTubeEmbedLink(video.path)}
              description={video.type}
              videoName={video.idVideo}
            />
          </div>
        ))}
      </Section>
    </div>
  );
};

export default BandVideos;
