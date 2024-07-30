function sortProductsByPrice(products) {
  // Your code here
  let temp;
  for (let x = 0; x < products.length; x++) {
    for (let i = 0; i < products.length - 1 - x; i++) {
      if (products[i].price > products[i + 1].price) {
        temp = products[i];
        products[i] = products[i + 1];
        products[i + 1] = temp;
      }
    }
  }
  return products;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Date", price: 1.5 },
];
console.log(sortProductsByPrice(products));

// Output: [
//   { name: 'Banana', price: 0.8 },
//   { name: 'Apple', price: 1.2 },
//   { name: 'Date', price: 1.5 },
//   { name: 'Cherry', price: 2.5 }
// ]
