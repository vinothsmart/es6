const trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

const totalDistance = trips.reduce((acc, trip) => acc + trip.distance, 0);

console.log(totalDistance);
