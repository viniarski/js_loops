for (let i = 0; i < 5; i++) {
    console.log("Iteration", i);
  }

let keepLooping = true;
let i = 0;
while (keepLooping === true) {
  console.log("Iteration", i);
  // set keepLooping to false with 10% chance: Math.random() returns a random value between 0 and 1
  keepLooping = Math.random() < 0.1;
  i++;
}

const myFoods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let i = 0; i < myFoods.length; i++) {
  console.log(myFoods[i]);
}

const foods = ["pizza", "chocolate", "ice cream", "cheese"];
for (let food of foods) {
  console.log(food);
}
 
const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}
