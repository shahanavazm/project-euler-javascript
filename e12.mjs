// The sequence of triangle numbers (term) is generated by adding the natural numbers.
// What is the value of the first triangle number to have over
// five hundred divisors?

import { range, xmap, takeWhile } from "./util.mjs";

function term(n) {
  const term1 = (n * (n + 1)) / 2;
  return term1;
}

function numberOfFactors(n) {
  let nof = 0;
  const sqrt = Math.sqrt(n);

  for (let i = 1; i <= sqrt; i += 1) {
    if (n % i === 0) {
      nof += 2;
    }
  }
  // Correction if the n is a perfect square
  if (sqrt * sqrt === n) {
    nof -= 1;
  }

  return nof;
}

function hasLessThanNFactors(_term) {
  const numberOfFactors1 = numberOfFactors(_term);
  if (numberOfFactors1 > 500) {
    return false;
  }
  return true;
}

function e12() {
  const nums = range(1, Number.MAX_VALUE);
  const termSeq = xmap(nums, term);
  const less = [...takeWhile(termSeq, hasLessThanNFactors, true)];
  const lastLess = less[less.length - 1];
  return lastLess;
}

export default e12;

// console.assert(e12() === 76576500);
