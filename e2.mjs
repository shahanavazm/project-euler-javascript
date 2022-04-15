// euler exercise 2: By considering the terms in the Fibonacci sequence
// whose values do not exceed four million, find the sum of the even-valued terms.

import { fibSeq, takeWhile, isEven, plusFn } from "./util.mjs";

function tillCap(val) {
  if (val > 4000000) {
    return false;
  }
  return true;
}

function e2() {
  const fibSeq1 = fibSeq();
  const fibsTillCap = [...takeWhile(fibSeq1, tillCap)];
  const evens = fibsTillCap.filter(isEven);
  const sum = evens.reduce(plusFn);
  return sum;
}

export default e2;

// console.assert(e2() === 4613732);
