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

//
// OR Operator
console.log("-------- OR Operator --------");

// Can use Any data type, can return any data type, can do short-circuiting/short circuiting evaluation
console.log(3 || "Jonas");
// If the first value is a truthy value, then it will immediately return that first value and JS will not take a look at the second value. This is short circuiting for the or operator.

console.log("" || "Jonas"); // As the empty string is a falsy value, the second value evaluated.

console.log(true || 0);

console.log(undefined || null); // As undefined is a falsy value, the second value evaluated. But null is also a falsy value.

console.log(undefined || 0 || "" || "Hello" || 23 || null);
// Hello is truthy, so therefore it will short circuit the entire evaluation.

restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//
//

// AND Operator
console.log("-------- AND Operator --------");

console.log(0 && "Jonas"); // AND Operator short-circuits when the first value is falsy and then immediately returns that falsy value without even evaluating the second operand

console.log(7 && "Janas"); // When both values are truthy, thge evaluation continues and then simply the last value is returned

console.log("Hello" && 23 && null && "Jonas"); // here the falsy value null short-circuits the evaluation, and returns itself

if(restaurant.orderPizza){
  restaurant.orderPizza("mushrooms", "spinach")
}

restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");