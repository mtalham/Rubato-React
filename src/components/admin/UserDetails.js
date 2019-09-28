import React, { useEffect, useState } from "react";
import { getCurrentUser, ROLE } from "../utils/Utils";
import Spinner from "../layout/Spinner";
import { CardHeader } from "../layout/Card";
import { BandContent } from "../band/Band";
import {
  ReadOnlyAudioSection,
  ReadOnlyImageSection,
  ReadOnlyVideoSection
} from "./BandDetails";
import { useProfile } from "../utils/ProfileProvider";

const UserDetails = ({ match, history }) => {
  const profile = useProfile();
  const [user, setUser] = useState(null);
  const { id } = match.params;

  useEffect(() => {
    getCurrentUser(id).then(res => setUser(res));
  }, [id]);

  const goBack = () => {
    const uri =
      profile && profile.role === ROLE.ADMIN ? "/admin" : "/user-profile";
    history.push(uri);
  };

  if (!user) return <Spinner />;
  return (
    <div style={{ marginTop: "100px" }} className="container">
      <CardHeader title={user.name} icon={"arrow_back"} onClick={goBack} />
      <BandContent band={user} />
      <ReadOnlyVideoSection user={user} />
      <ReadOnlyAudioSection user={user} />
      <ReadOnlyImageSection user={user} />
    </div>
  );
};

export default UserDetails;
