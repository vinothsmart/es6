function Car(options) {
  this.title = options.title;
}

Car.prototype.drive = function () {
  return "vroom";
};

// const car = new Car({ title: "Focus" });
// console.log(car.drive());
// console.log(car);

function Toyota(options) {
  this.color = options.color;
}

const toyota = new Toyota({ color: "red", title: "Daily Driver" });

console.log(toyota);
