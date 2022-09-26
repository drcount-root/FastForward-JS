"use strict";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  //   [`day-${2 + 4}`]: {
  //     open: 0,
  //     close: 24,
  //   },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 Enhanced Object Literal for properties
  openingHours,

  // ES6 Enhanced Object Literal for methods
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    return console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} & ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// Data is stored in key-value pairs in maps.
// In map, the keys can be any type
// Big diff between Objs and maps is - In mpa keys can be of any types where in Obj, keys should be always String type

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "Lisbon, Portugal"));

// set() method
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are close :(");

// get() method
console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// has() method
console.log(rest.has("categories"));

// delete() method
rest.delete(2);
console.log(rest);

// size() method
console.log(rest.size);

// clear() method
// rest.clear();
// console.log(rest);

// Error
// rest.set([1, 2], "Test");
// console.log(rest);
// console.log(rest.get([1, 2]));

// Fix
const arr = [1, 2];
rest.set(arr, "Test");
console.log(rest);
console.log(rest.get(arr));

// DOM
rest.set(document.querySelector("h1"), "Heading");
console.log(rest);
