"use strict";
// Type Annotation on variables
let numA = 10;
let strB = 'My Name is: ';
let arrX = [4, 5, 7];
let genericArrType = ['l', 'e', 'a', 'r', 'n'];
let objY = { name: 'Max', age: 40 };
let isDone = true;
// Tuple types allow you to express an array with a fixed number of elements whose types are known.
let tupleZ;
tupleZ = [10, 'Match the string type', true]; // Valid
// Error: Type 'number' is not assignable to type 'string'.
// tupleZ = [10, 20, true]
// Return Type Annotations
