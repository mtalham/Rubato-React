import React, { useState, useEffect } from "react";
import { Collection, CollectionItem } from "../layout/Collection";
import Spinner from "../layout/Spinner";
import { getAllUsers } from "../admin/AdminUtils";
import { ROLE } from "../utils/Utils";
import css from "../layout/styles/Admin.module.scss";

const User = () => {
  const [bandList, setBandList] = useState(null);
  useEffect(() => {
    getAllUsers().then(res => setBandList(res));
  }, []);

  if (!bandList) return <Spinner />;
  return (
    <Collection>
      {bandList &&
        bandList
          .filter(b => b.role === ROLE.BAND)
          .map(band => (
            <div className={css.item} key={band.personId}>
              <CollectionItem
                title={band.name}
                firstLine={band.username}
                secondLine={band.phone}
                link={`/user-details/${band.personId}`}
              />
            </div>
          ))}
    </Collection>
  );
};

export default User;
