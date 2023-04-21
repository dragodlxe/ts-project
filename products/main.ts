import { addProduct, Products, calcStock } from "./product.service";

addProduct({
  name: 'p1',
  createdDt: new Date,
  stock: 2
});

addProduct({
  name: 'p2',
  createdDt: new Date,
  stock: 2,
  size: 'XL'
});

console.log(Products);
console.log(calcStock)
