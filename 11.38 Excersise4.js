const color = "red";

const Car = {
  color,
  drive() {
    return "Vroom!";
  },
  getColor() {
    return this.color;
  },
};

console.log(Car.drive());
console.log(Car.getColor());
