"use strict";

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    return console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} & ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// // // Destructuring Arrays & Objects

// Arrays

// Spread operator, as on right side of = operator
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// REST, because of left side of the = operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // a = 1, b = 2, others = [ 3, 4, 5 ]
// REST patterns basically collects the unused elements in the destructuring assignments

// 3 dots in the both sides of the assignment operator
const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// REST doesn't include any skipped elements
// There can only be one REST in any destructuring assignment
console.log(
  "Print pizza => ",
  pizza,
  "\nPrint risotto =>",
  risotto,
  "\nPrint other items =>",
  otherFood
);

// Objects

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// // // Functions

// Arrays

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza("mushrooms", "Onion", "Olives", "Spinach");

restaurant.orderPizza("mushrooms");
