// ES6 import export

export const PI = Math.PI;

function cube(num) {
  return num * num * num;
}
/* export default function square(num) {
  return num * num ;
} */

export function findMax(arrNum) {
  return Math.max(...arrNum);
}

function sqrt(num) {
  return Math.sqrt(num);
}

export default { sqrt, cube };
