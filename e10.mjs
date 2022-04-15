// Find the sum of all the primes below two million.

import { isPrime, range } from "./util.mjs";

function e10() {
  const numsTillCap = range(1, 2000001);
  const primes = [...numsTillCap].filter(isPrime);
  const sum = primes.reduce((a, b) => a + b);
  return sum;
}

export default e10;

// console.assert(e10() === 142913828922);
