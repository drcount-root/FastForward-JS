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

// Set : A collection of unique values
// Never have any duplicate
// To create Set, we should use new keyword, const mySet = new Set(iterables); mostly that iterables can be arrays, strings. And Set can also be empty
// Sets are also iterables
// typeof(Set) = Object, but Set doesn't have key value pair like objects
// In set there are no indexes, and thats why we can't retrieve data from a set

const ordersSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Risotto",
  "Pasta",
  "Pizza",
]);

console.log(ordersSet);

// String passed to Set
console.log(new Set("Jonas")); // {'J', 'o', 'n', 'a', 's'}

// Size of a set
console.log(ordersSet.size); // 3

// To check a certain item's presence in a Set
console.log(ordersSet.has("Pizza"));
console.log(ordersSet.has("Bread"));

// Add new elems
ordersSet.add("Garlic Bread");
ordersSet.add("Garlic Bread");
console.log(ordersSet);

// Delete elems
ordersSet.delete("Risotto");
console.log(ordersSet);

// Delete all elems of the set
// ordersSet.clear();
// console.log(ordersSet);

// Iterating over a set items
for (const order of ordersSet) console.log(order);

// Example
const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// As Set
const staffUniqueSet = new Set(staff);
console.log("Set => ", staffUniqueSet);

// As Array
const staffUniqueArray = [...new Set(staff)];
console.log("Array => ", staffUniqueArray);
// As spread operator works on Sets also

// To get the total of unique items from a string
const name = "subhamsahu";
console.log(new Set(name).size);
