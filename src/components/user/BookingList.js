import React, { useState, useEffect } from "react";
import { client, currentBookings, date, getProfile } from "../utils/Utils";
import { List } from "../layout/Collection";

export const Bookings = ({ bookings }) => (
  <ul className="collection">
    {currentBookings(bookings).map(booking => (
      <List key={booking.id}>
        <b>Start:</b> {date(booking.fromDate)}
        <br />
        <b>End:</b> {date(booking.toDate)}
        <br />
      </List>
    ))}
  </ul>
);

const BookingList = ({ refetch }) => {
  const [bookings, setBookings] = useState(null);
  const profile = getProfile();

  useEffect(() => {
    client()
      .get(`api/booking/user-bookings/${profile.user.idPerson}`)
      .then(res => setBookings(res.data));
  }, [profile.user.idPerson, refetch]);

  if (bookings === null || currentBookings(bookings).length === 0) {
    return <div>You did not have any bookings.</div>;
  }

  return <Bookings bookings={bookings} />;
};

export default BookingList;
