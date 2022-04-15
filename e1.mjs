// euler exercise 1: find the sum of integers below 1000 which are multiples
// of 3 or 5.

import { isMultiple, range, plusFn } from "./util.mjs";

function isMultiple3Or5(n) {
  if (isMultiple(n, 3) || isMultiple(n, 5)) {
    return true;
  }
  return false;
}

function e1() {
  const nums = [...range(1, 1000)];
  const multiples = nums.filter(isMultiple3Or5);
  const sum = multiples.reduce(plusFn);
  return sum;
}

export default e1;

// console.assert(e1() === 233168);
