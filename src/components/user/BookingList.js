import React, { useState, useEffect } from "react";
import { client, getProfile } from "../utils/Utils";
import { List } from "../layout/Collection";

const BookingList = () => {
  const [bookings, setBookings] = useState(null);
  const profile = getProfile();

  useEffect(() => {
    client()
      .get(
        `http://localhost:8080/api/booking/user-bookings/${profile.user.idPerson}`
      )
      .then(res => setBookings(res.data));
  }, [profile.user.idPerson]);

  if (bookings === null || bookings.length === 0) {
    return <div>You did not have any bookings.</div>;
  }

  return (
    <ul className="collection">
      {bookings.map(booking => (
        <List key={booking.id}>
          Start: {booking.fromDate}
          <br />
          End: {booking.toDate}
          <br />
        </List>
      ))}
    </ul>
  );
};

export default BookingList;
