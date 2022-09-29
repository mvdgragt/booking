export const addBooking = (added, updatedBooking) => {
  const startingAddedId =
    updatedBooking.length > 0
      ? updatedBooking[updatedBooking.length - 1].id + 1
      : 0;
  return [updatedBooking, { id: startingAddedId, ...added }];
};

export const changedBooking = (changed, updatedBooking) => {
  return (updatedBooking.map(appointment => (
    changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment)));
}

export const updateBooking = (deleted, updatedBooking) => {
return (updatedBooking = updatedBooking.filter(
  (appointment) => appointment.id !== deleted
))};

// export const addBooking = (added, updatedBooking) => {
//   const startingAddedId =
//     updatedBooking.length > 0
//       ? updatedBooking.length + 1
//       : 0;
//       console.log({id: startingAddedId})
//   return [updatedBooking, { id: startingAddedId, ...added }];
// };