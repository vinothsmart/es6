class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "vroom";
  }
}

// const car = new Car({ title: "Toyota" });
// console.log(car);
// console.log(car.drive());

class Toyota extends Car {
  constructor(options) {
    super(options); // Car.constructor()
    this.color = options.color;
  }
  honk() {
    return "beep";
  }
}

const toyota = new Toyota({
  color: "red",
  title: "Daily Driver",
});
console.log("-----");
console.log(toyota.honk());
console.log(toyota);
