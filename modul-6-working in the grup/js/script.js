"use strict";

// const user = {
//   name: "ban"
// };

// const changeName = function(name) {
//   user.name = name;
// };
// changeName("Alan");
// console.log(user.name);

// const users = [
//   "Ben",
//   "Alex",
//   "Fifi",
//   "Anton",
//   "Rafaello",
//   "Donatello",
//   "Tomat"
// ];

// users.forEach(item => console.log(item));

// users.forEach(function(item, index, array) {
//   //   console.log(item);
//   array[index] = { name: item };
// });

// Array.prototype.newforEach = function(fn) {
//   for (let i = 0; i < this.length; i++) {
//     fn(this[i], i, this);
//   }
// };

// console.log(users);
// users.forEach(function(item) {
//   console.log(item);
// });

// const bar = function(a, b, fn) {
//   return fn(a, b);
// };

// console.log(
//   bar(2, 5, function(a, b) {
//     return a + b;
//   })
// );

const productsList = [
  {
    id: 1,
    name: "Telephone",
    prise: 555,
    inStock: true
  },
  {
    id: 2,
    name: "car",
    prise: 5555555,
    inStock: true
  },
  {
    id: 3,
    name: "TV",
    prise: 5555,
    inStock: true
  },
  {
    id: 4,
    name: "Mouse",
    prise: 55,
    inStock: true
  },
  {
    id: 5,
    name: "iphone",
    prise: 555555,
    inStock: false
  }
];

const cart = {
  productsList,
  getTotalPrise() {
    return this.productsList.reduce((acc, product) => acc + product.prise, 0);
  },
  add(product) {
    this.productsList.push(product);
  },
  removeById(id) {
    this.productsList = this.productsList.filter(product => product.id !== id);
  },
  showInfo() {
    this.productsList.forEach(product => {
      console.log(`product name ${product.name} and prise ${product.prise}`);
    });
  },
  isAllProductInStock() {
    const res = this.productsList.every(product => product.inStock);

    if (!res) console.log(`Some products is out of stock`);
  },
  setInStockById(id) {
    const searchedProduct = this.productsList.find(
      product => product.id === id
    );

    searchedProduct
      ? (searchedProduct.inStock = true)
      : console.error("Product was not found");
  },
  log() {
    console.log(this.productsList);
  }
};
cart.setInStockById(8);
// cart.showInfo();
cart.removeById(3);
cart.isAllProductInStock(4);
cart.log();
console.log(cart.getTotalPrise());
