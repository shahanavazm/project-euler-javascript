// euler exercise 5: What is the smallest positive number(smallest divisible, sd) that is
// evenly divisible by all of the numbers (factors) from 1 to 20?

import { isDivisible, range, takeWhile } from "./util.mjs";

function isDivisibleByFactors(n) {
  // const factors = [...range(20, 1, -1)];
  // since n will always be multiples of 20, we can skip 20.
  // const factors = [...range(19, 1, -1)];
  // since multiple of 20 are always multiples of 1 and 2, skip 1 and 2.
  // const factors = [...range(19, 3, -1)];
  // profiler hinted optimization:
  const factors = [19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3];

  const divisibles = [...takeWhile(factors, (val) => isDivisible(n, val))];
  const divisible = factors.length === divisibles.length;
  return divisible;
}

function e5() {
  // brute force: check every number if they are divisible by 1 thru 20.
  // but, instead of checking every number, we only need to check multiples of 20.

  const nums = range(20, Number.MAX_VALUE, 20);
  const tillSd = [...takeWhile(nums, (n) => !isDivisibleByFactors(n), true)];
  // last of tillSd is the smallest divisible.
  const sd = tillSd[tillSd.length - 1];
  return sd;
}

export default e5;

// console.assert(e5() === 232792560);
