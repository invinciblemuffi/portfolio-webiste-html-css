/*
 ** http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
 ** ABOVE LINK SHOWS CALLSTACK, EVENT LOOP, WEBAPI WORKING IN REAL TIME
 ** JavaScript is a Single-Threaded, Interpreted Language and not compiled
 ** JS Interpreters(Engines) - converts JS code to machine code (Chrome-V8, Firefox-Quantum, Edge-Chakra)
 ** Synchronous(Blocking operations) vs Asynchronous Events
 ** Asynchronous(Ajax, setTimeout, DOM, timers) are pushed to WebAPI block which is outside of browsers' runtime environment
 ** Event Loop - Picks up tasks from Event Queue, and it is single theaded.
 ** Event/Callback Queue - Holds callback fns until Call Stack gets empty
 ** Jobs Queue - Reserved for promises, has higher priority than Event Queue
 ** CallStack(First-in Last-out), Heap - present in browsers' runtime enviroment
 ** Memory Heap - Stores your variables
 ** CallStack - Where code is executed one by one
 ** https://thecodest.co/images/uploaded/2020/03/asynchronous-and-single-threaded-javascript-meet-the-event-loop/runtime-architecture.png
 */

//  dir method on console give object representation instead of log methods String representation
console.dir(document);

for (i = 0; i < 1000; i++) {
  console.log("Synchronous operation");
}
console.log("For Loop is blocking me");

setTimeout(() => {
  for (i = 0; i < 1000; i++) {
    console.log("Asynchronous operation");
  }
}, 0);
// Callback gets pushed to WebApi block.
// Once the timer is up it pushes the callback to Event Queue.
console.log("For Loop is not blocking me");
// After console.log gets popped out from CallStack,
// Event Loop will pick up the first event from the Event Queue and push it into CallStack

setTimeout(() => {
  for (i = 0; i < 1000; i++) {
    console.log("Asynchronous operation 1");
  }
}, 5);
setTimeout(() => {
  for (let i = 0; i < 1000; i++) {
    console.log("Asynchronous operation 2");
  }
}, 0);
for (let i = 0; i < 10; i++) {
  console.log("Synchronous operation 1");
}

/* 
 ### JavaScript is non-reactive in nature
 ### We can use Proxy constructor function to get the reactive behavior
 */

let message = "Hello!";
let fullMessage = message + " World!";
console.info(fullMessage);
let message = "Hello!!!!";
// Even though we assigned a new value to message,
// fullMessage still stores old message value as JS by default is not reactive in nature
console.info(fullMessage);

// Use Proxy to get a reactive behavior
const data = {
  message: "Hello!",
  longMessage: "Hello! World!",
};

const proxyHandler = {
  set(target, key, value) {
    console.info(
      `The target is : ${target}, key is: ${key} and value is: ${value}`
    );
    if (key === message) {
      target.longMessage = value + "World!";
    }
    target.message = value;
  },
};

const proxy = new Proxy(data, proxyHandler);
proxy.message = "Hello!!!!";
console.info(proxy.longMessage);

/* 
camelCase
PascalCase
// Variable declaration
CONST, LET, VAR
*/

/* 
Operators
Assignment =
Comparision ==, ===, >=,<,<=,>
Arithmetic +,-,*,/,%
Logical && || !
Ternary ? :
Unary +,-
Exponentiation **

*/

/* 
SCOPING and HOISTING(Lifting)
GLOBAL Scope
Block Scope
*/

function outer() {
  let blockVariable = 2;
  console.info(`outer block variable at start ${blockVariable}`);
  console.info(`hoist variable at start ${hoistVar}`);
  inner();
  function inner() {
    let hoistVar = 3;
    console.info(`inner block variable ${hoistVar}`);
  }
  console.info(`outer block variable at the end ${hoistVar}`);
}
outer();

/* {
  var/let/const blockVariable = 2;
  console.info(`outer block variable at start ${blockVariable}`);
  {
    var/let/const blockVariable = 3;
    console.info(`inner block variable ${blockVariable}`);
  }
  console.info(`outer block variable at the end ${blockVariable}`);
} */

/* 
Literals/Datatypes

Array =[]
- indexing
Object = {}
- dot notation, computed property notation
String = "" or ''
Boolean = true/false
Number = 0
Template = ` `
RegExp = / /gi
Date = new Date()
Function
Class
Map, Sets, WeakMap, WeakSets
SPREAD SYNTAX = for object and array
Object and Array Destructuring
*/

// Maps are similar to objects with key:value pair,
// Maps do have size property and can be easily looped with forEach, for...of
// A Map does not contain any keys by default.
let map1 = new Map();
map1.set("fname", "Max");
map1.get(fname);
map1.size;
map1.delete(fname);

// Set's are iterable objects
let duplicateVals = [1, 4, 2, 1, 2, 4, 6];
let uniqueVal = new Set(duplicateVals);
uniqueVal.add(40);

// An Object has a prototype,
// so it contains default keys that could collide with your own keys if you're not careful.
let emptyObj = Object.create(null);

let arrMonths = ["Jan", "Feb", "Mar", "Apr"];
let fourthMonth = [, , , month];
let objEmployee = {
  name: "Rob",
  age: 25,
  hobbies: ["Football", "Badminton", "Swimming"],
  isEmployed: true,
  skills: [{ html: "intermediate" }, { css: "beginner" }, { js: "advanced" }],
};

let arrEmployees = [
  { name: "Miller", age: 30 },
  { name: "Ross", age: 28 },
  { name: "Lenny", age: 43 },
];

const { name, skills } = objEmployee;
const {
  name,
  skills: [{ js }],
} = objEmployee;
const {
  name,
  skills: [{ html }],
  hobbies: [foot],
  ...restObj
} = objEmployee;

const [{ name }, ...restVal] = arrEmployees;

let myNewArr = [...arrEmployees, "Robert"];

let myNewObj = { ...objEmployee, lname: "Miller" };

/* 
Conditions or Control flow
IF else if else
switch(expression){ case label: break; default: statements; break;}
*/

let isValid = true;
if (isValid === true) {
  console.info("isValid value is true");
} else {
  console.error("isValid value is false");
}

let switchValue = 10;
switch (switchValue) {
  case 0:
    console.log("Case 0 Matched");
    break;
  case 10:
    console.log("Case 10 Matched");
    break;
  default:
    console.log("No cases matching!");
    break;
}

/* 
Looping
while
do while
for
for...in (Works on normal objects and iterable objects)
for...of (Works on iterable objects, maps, sets)
Object.keys(myObj), Object.values(myObj), Object.entries(myObj)
forEach
map
reduce
*/

for (let i = 0; arrEmployees.length - 1; i++) {
  console.log("Employee Name is: ", arrEmployees[i].name);
  console.log("Employee Age is: ", arrEmployees[i].age, "\n");
}

let obj = { name: "Rob", age: 25, hobbies: ["swimming", "riding"] };

for (let key in obj) {
  if (Array.isArray(obj[key])) {
    for (let i in obj[key]) {
      console.log(obj[i]);
    }
  } else {
    console.log(obj[key]);
  }
}

arrEmployees.forEach((data) => console.log(data.name));

/* 
functions - function body, function execution, parameters, arguments
constructor, factory functions
return and this object (global `window` object)
nested functions and closures
function expression
arrow functions
callback functions
Classes - constructor, this, new
*/
// Factory Function
/* 
Factory Functions in JavaScript are similar to constructor functions/class functions, 
but they do not require the use of the ‘this‘ keyword for inner values 
or the use of the ‘new‘ keyword when instantiating new objects. 
Factory Functions can contain inner values, methods, etc. just like normal functions. 
Factory Functions differ from regular functions as they always return an object, 
which will contain any value, method, etc.

Why it is useful?

If we have complex logic, and we have to create multiple objects again and again 
that have the same logic, we can write the logic once in a function and use that function 
as a factory to create our objects. It’s exactly the same as a real-world factory 
producing products.
*/
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("Draw a circle");
    },
  };
}
let circleFactObj = createCircle(100);

function math(a, b) {
  let sum = () => a + b;
  let cube = () => a * a * a;
  return { sum: sum(), cube: cube };
}

let fns = math(5, 2);
fns.sum; // 7
fns.cube(); // 125

let math = {
  sum: (a, b) => a + b,
  cube: (y) => y * y * y,
};

math.sum(5, 2); // 7
math.cube(3); // 27

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("Draw a circle with:", this.radius);
  };
}
let circleConstrObj = new Circle(100);

// Callback functions
var arrSum = [5, 10, 15, 20];
var total = arrSum.reduce(
  (previousValue, currentValue, currentIndex, array) => {
    var returnVal = previousValue + currentValue;
    console.log(previousValue, currentValue, currentIndex, array, returnVal);
    return returnVal;
  },
  10
);
console.log(total);

/* 
callback iteration	previousValue	currentValue	currentIndex	array	            return value
first call	            10	            5	            0	      [5, 10, 15, 20]	    15
second call	            15	            10	          1	      [5, 10, 15, 20]	    25
third call	            25	            15	          2	      [5, 10, 15, 20]	    40
fourth call	            40	            20	          3	      [5, 10, 15, 20]	    60
 */

// Asynchronous + callback
setTimeout(() => {
  console.log("I get executed after 3 secs");
}, 3000);
setTimeout(() => {
  console.log("I get executed after 0 secs");
}, 0);
console.log("I get executed immediately");

// https://dmitripavlutin.com/javascript-classes-complete-guide/
class Employee {
  #lName;
  constructor(name, age, lName) {
    this.fName = name;
    this.empAge = age;
    this.#lName = lName;
  }

  #getAllDetails() {
    return `FullName is ${this.fName} ${this.#lName} at age ${this.empAge}`;
  }

  getEmpDetails() {
    return this.#getAllDetails();
  }

  get empLastName() {
    return this.#lName;
  }

  set empLastName(lastName) {
    return (this.#lName = lastName);
  }

  getName() {
    return this.fName;
  }

  setName(newName) {
    this.currentName = newName;
    console.log(this.currentName);
  }
}

class Coder extends Employee {
  constructor(coderName, mySkills) {
    super(coderName);
    this.skills = mySkills;
  }
}

const emp1 = new Employee("Rob", "20", "Mill");
emp1.fName;
emp1.getName();
emp1.setName("Mark");
emp1.empLastName;
emp1.empLastName = "Mark";

const hacker = new Coder("Mike", ["JS", "FullStack"]);
hacker.fName;
hacker.setName("Kevin");
hacker.skills;

/* 
Promises/Fetch API
Async/Await
try/catch block
ES6 Module system - import/export
 */

// Promise States : Pending, Fulfilled, Rejected
new Promise((resolve, reject) => resolve("I am resolved"));
function square(num) {
  return new Promise((resolve, reject) => resolve(num * num));
}
square(2).then((response) => console.log("Response = ", response));

// API list - https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

// Example : fetch a request over network returns a promise back
fetch(
  {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers":
      "Origin,X-Requested-with,Content-Type,Accept,Authorization",
  },
  "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
)
  .then((res) => console.log(res.json()))
  .catch((err) => console.error("There is an error: ", err));
// Output
/* 
Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"
[[PromiseResult]]: undefined
*/

/* 
response.json() returns a promise containing the result of the response body in JSON form 
*/

fetch(
  "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0"
)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(`${err} ===>> An error occured`));

let fetchData = fetch("https://api.agify.io?name=bella");
let getData = fetchData
  .then((res) => res.json())
  .catch((err) => console.error("There is an error"));
console.log("Data in JSON format is ===>>>", getData); // Promise Object with resolved status
getData.then((data) => console.log(data));

async function apiCall() {
  try {
    let getData = await fetch("https://www.boredapi.com/api/activity");
    let data = await getData.json();
    console.log(data);
  } catch (error) {
    console.error("Please check the error", error);
  }
}

apiCall();

async function apiCall() {
  try {
    return fetch("https://www.boredapi.com/api/activity");
  } catch (error) {
    console.error("Please check the error", error);
  }
}

let getResponsePromise = await apiCall();
console.log("Execute immediately zero");
let getData = await getResponsePromise.json();
console.log(getData);
console.log("Execute immediately");
