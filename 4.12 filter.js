const products = [
  { name: "cucumber", type: "vegetable" },
  { name: "banana", type: "fruit" },
  { name: "celery", type: "vegetable" },
  { name: "orange", type: "fruit" },
];

let filteredProdcuts = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].type === "fruit") {
    filteredProdcuts.push(products[i]);
  }
}

console.log(filteredProdcuts);
