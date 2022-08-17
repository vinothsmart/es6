const car = (name) => {
  return {
    model: name,
  };
};

const cars = [car("Honda"), car("Toyota"), car("Tata")];

console.log(cars);
const findCar = cars.find((car) => car.model === "Tata");
