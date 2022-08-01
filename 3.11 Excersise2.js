const trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 85, time: 40 },
];

const speeds = trips.map((trip) => trip.distance / trip.time);

console.log(speeds);
