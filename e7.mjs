// What is the 10,001st prime number?

import { isPrime, range, xfilter, takeWhile } from "./util.mjs";

function e7() {
  function upToCap(n, i) {
    if (i === 10000) {
      return false;
    }
    return true;
  }
  const nums = range(1, Number.MAX_VALUE);
  const primes = xfilter(nums, isPrime);
  const primesUpToCap = [...takeWhile(primes, upToCap, true)];
  const nthPrime = primesUpToCap[primesUpToCap.length - 1];
  return nthPrime;
}

export default e7;

// console.assert(e7() === 104743);
