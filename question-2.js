function findProductPrice(products, name) {
  // Your code here
  let start = 0;
  let end = products.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + end / 2);
    if (products[mid].name === name) {
      return products[mid].price;
    }
    if (products[mid].name < name) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
}

// Test case
const products = [
  { name: "Apple", price: 1.2 },
  { name: "Banana", price: 0.8 },
  { name: "Cherry", price: 2.5 },
  { name: "Eherry", price: 2.6 },
  { name: "Fherry", price: 2.7 },
];

console.log(findProductPrice(products, "Cherry")); // Output: 0.8
console.log(findProductPrice(products, "Apple")); // Output: -1
