"use strict";

// const Hero = function(name, power, age) {
//   this.name = name;
//   this.power = power;
//   this.age = age;
//   this.incrementAge = function() {
//     this.age = this.age + 1;
//   };
// };

// const tonyStark = new Hero("Tony", "rich", 52);
// const hulk = new Hero("Benner", "grean power", 40);
// tonyStark.incrementAge();
// console.log(tonyStark);
// console.log(hulk);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Cart
// mathods
// addItem, removeItem, deleteAllItems;

// // props
// itemList;

// // classUser
// // metods
// rename, changePrise;

// // props
// name, prise, description;

// const Cart = new cart()

const Produkt = function(name, prise, description) {
  this.name = name;
  this.prise = prise;
  this.description = description;
  this.rename = function(newName) {
    this.name = newName;
  };
  this.changePrise = function(newPrise) {
    this.prise = newPrise;
  };
};

const Cart = function() {
  this.itemList = [];
  this.addItem = function(item) {
    this.itemList.push(item);
  };
  this.removeItem = function(item) {
    this.removeItem.slice(item);
  };
  // this.deleteAllItems = function(item){
  //     this.deleteAllItems.un
  // }
};
const cart = new Cart();
const telephone = new Produkt("apple", "cool", "10000");
cart.addItem(telephone);

console.log(cart);
telephone.rename("Gawnuk");


//фильтер

    this.removeItem = function(removedItem){
        this.itemList = this.itemList.filter(item => item !== removedItem);
    }