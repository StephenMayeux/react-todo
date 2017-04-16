// function add (a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
// // spread operator is useful when you want to call a function with a set of
// // arguments that are in an array
//
// var toAdd = [9, 5];
// console.log(add(...toAdd)); // the spread operator comes before an array or a
// // variable that is an array. This spreads out the array contents as individual
// // arguments

// var groupA = ['Luis', 'Matt', 'Bob', 'James'];
// var groupB = ['Vikram'];
// var final = [3, ...groupA]; // ... brings out the elements/removes array nesting
// // [3, ['Luis'...]] vs [3, 'Luis', 'Matt'...]
// console.log(final);

var person = ['Luis', 26];
var personTwo = ['Jaz', 22];
// Hi Luis, you are 26

function ageGreet (name, age) {
  console.log(`Hi ${name}, you are ${age}`);
}

ageGreet(...person);
ageGreet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Luis', ...names];
// Hello Luis

final.forEach(function (name) {
  console.log(`Hi ${name}`);
});
