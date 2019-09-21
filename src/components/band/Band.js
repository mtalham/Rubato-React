import React, { useState, useEffect } from "react";
import { client, getProfile } from "../utils/Utils";
import Spinner from "../layout/Spinner";
import { CardContent, CardHeader } from "../layout/Card";
import BandVideos from "./bandvideos/BandVideos";
import BandImages from "./bandimages/BandImages";
import UpdateBand from "./UpdateBand";

const Band = () => {
  const [band, setBand] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const profile = getProfile();

  useEffect(() => {
    client()
      .get(
        `http://localhost:8080/api/person/searchById/${profile.user.idPerson}`
      )
      .then(res => setBand(res.data));
    // eslint-disable-next-line
  }, [profile.token, refetch]);

  if (!band) return <Spinner />;

  return (
    <div style={{ marginTop: "100px" }} className="container">
      <CardHeader
        title={band.name}
        icon={"edit"}
        classname="halfway-fab btn-floating"
        onClick={() => setShowForm(true)}
      />
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
      <UpdateBand
        showForm={showForm}
        setShowForm={setShowForm}
        band={band}
        setRefetch={setRefetch}
      />
      <BandVideos videos={band.video} setRefetch={setRefetch} />
      <BandImages />
    </div>
  );
};

export default Band;
