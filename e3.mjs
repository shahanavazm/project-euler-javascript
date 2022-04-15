// euler exercise 3:
// Find the largest prime factor of a composite number.

// Solution Details:

// This algorithm is based on the document eu3_003_overview.pdf which is found at:
// http://nrciz.googlecode.com/svn-history/r64/trunk/projecteuler/pdfs/
// 003_overview.pdf

// Let the given number be n and let k = 2, 3, 4, 5, ... . For each k, if it is a
// factor of n then we divide n by k and completely divide out each k before
// moving to the next k. It can be seen that when k is a factor it will
// necessarily be prime, as all smaller factors have been removed, and
// the final result of this process will be n = 1.

import { range, takeWhile } from "./util.mjs";

// first we define the function completelyDivideOutNByK.
function completelyDivideOutNByK(_n, k) {
  let n = _n;
  for (;;) {
    if (n % k === 0) {
      n /= k;
    } else {
      return n;
    }
  }
}

// Given the function completelyDivideOutNByK(n, k), the core logic
// will be:
function largestPrimeFactor(_n) {
  let n = _n;
  function tillNis1(k) {
    n = completelyDivideOutNByK(n, k);
    if (n === 1) {
      return false;
    }
    return true;
  }

  const kSeq = range(2, Number.MAX_VALUE, 1);
  const kSeqTillNis1 = [...takeWhile(kSeq, tillNis1, true)];
  const lastk = kSeqTillNis1[kSeqTillNis1.length - 1];
  return lastk;
}

function e3() {
  return largestPrimeFactor(600851475143);
}

export default e3;

// console.assert(e3() === 6857);
