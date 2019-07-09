//question 1 - Matt
"use strict";
const repeat = (n, fn) => {
  for (let i = 0; i < n; i++) {
    fn(i);
  }
};

repeat(5, n => {
  console.log(n * 5);
});

const hello = () => console.log("Hello world");
const goodbye = () => console.log("Goodbye world");

repeat(5, hello);
repeat(5, goodbye);

// Question 2

function filter(array, fn) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    fn(array[i]);
    if (fn(array[i])) arr.push(array[i]);
  }
  return arr;
}

const myName = ["John", "Paul", "Ringo", "George"];

console.log(filter(myName, name => name[0] === "G"));

// Question 3
const hazardWarningCreator = typeofWarning => {
  let warningCounter = 0;
  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeofWarning} hazard on ${location}!`);
    console.log(
      `The ${typeofWarning} hazard alert has triggered ${warningCounter} times(s) today!`
    );
  };
};

const waterLeak = hazardWarningCreator("water leak");

const fire = hazardWarningCreator("fire");

waterLeak("5th Ave");
waterLeak("Main Str");
waterLeak("14th Str");

fire("The Roof");
fire("your yhome");
fire("the jungle");

const turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

console.log(turtleMoves.filter(move => move[0] >= 0 && move[1] >= 0));
