// euler exercise 4:
// Find the largest palindrome made from the product of two 3-digit numbers.

import { range, product, isPalindrome } from "./util.mjs";

// Solution:
// It is easier if we visualize the solution using relational tables.
//
// nums1   nums2
// -----   -----
// 999     999
// 998     999
// .       .
// .       .
// .       .
// 100     100
//
// Then the cartesian cross product of nums1 and nums2 will be:
//
// cross_product
// -------------
// x       y
// 999     999
// 999     998
// 999     997
// .
// .
// .
// 100     101
// 100     100
//
//
// Then we derive xy:
//
// xy
// --
// 998001
// .
// .
// .
// 10000
//
// From the above table we can filter for items which are palindroms and then the max of xy
// will be our answer.

function e4() {
  function multiply(item) {
    return item[0] * item[1];
  }

  const nums1 = [...range(999, 101, -1)];
  const nums2 = [...range(999, 101, -1)];
  const crossProduct = product(nums1, nums2);
  const xy = crossProduct.map(multiply);
  const palins = xy.filter(isPalindrome);
  const max = Math.max(...palins);
  return max;
}

export default e4;

// console.assert(e4() === 906609);
