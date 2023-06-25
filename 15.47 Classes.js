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
  Car.call(this, options);
  this.color = options.color;
}

Toyota.prototype = Object.create(Car.prototype);
Toyota.prototype.constructor = Toyota;
Toyota.prototype.honk = function () {
  return "beep";
};

const toyota = new Toyota({ color: "red", title: "Daily Driver" });

console.log(toyota);
console.log(toyota.drive());
console.log(toyota.honk());
