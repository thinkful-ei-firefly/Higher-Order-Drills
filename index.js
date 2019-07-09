
//question 1 - Matt
'use strict';
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
      if (fn(array[i]) === true) arr.push(array[i])
    }
    return arr;
}

const myName = ['John', 'Paul', 'Ringo', 'George'];

console.log(filter(myName, name => name[0] ==='G'));

// Question 3
