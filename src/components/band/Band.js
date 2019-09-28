import React, { useState, useEffect } from "react";
import { getCurrentUser, getProfile } from "../utils/Utils";
import Spinner from "../layout/Spinner";
import { CardContent, CardHeader } from "../layout/Card";
import BandVideos from "./bandvideos/BandVideos";
import BandImages from "./bandimages/BandImages";
import UpdateBand from "./UpdateBand";
import BandAudio from "./bandaudio/BandAudio";

const Band = () => {
  const [band, setBand] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const profile = getProfile();

  useEffect(() => {
    getCurrentUser(profile.user.idPerson).then(res => setBand(res));
    // eslint-disable-next-line
  }, [profile.token, refetch]);

  if (!band) return <Spinner />;

  console.log(band);
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <CardHeader
        title={band.name}
        icon={"edit"}
        onClick={() => setShowForm(true)}
      />
      <BandContent band={band} />
      <UpdateBand
        showForm={showForm}
        setShowForm={setShowForm}
        band={band}
        setRefetch={setRefetch}
      />
      <BandVideos videos={band.video} setRefetch={setRefetch} />
      <BandAudio audios={band.audio} setRefetch={setRefetch} />
      <BandImages images={band.images} setRefetch={setRefetch} />
    </div>
  );
};

export default Band;

export const BandContent = ({ band }) => (
  <CardContent>
    <div>
      <b>About:</b> <span>{band.about}</span>
    </div>
    <div>
      <b>Contact Number:</b> <span>{band.phone}</span>
    </div>
    <div>
      <b>Booking Fee:</b> <span>{band.price}</span>
    </div>
  </CardContent>
);
