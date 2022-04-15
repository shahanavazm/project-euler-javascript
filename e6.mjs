// Find the difference between the sum of the squares of the first
// one hundred natural numbers and the square of the sum.

import { squareFn, plusFn, range } from "./util.mjs";

function sumOfSquares(nums) {
  const squares = nums.map(squareFn);
  const sum = squares.reduce(plusFn);
  return sum;
}

function squareOfSums(nums) {
  const sum = nums.reduce(plusFn);
  const square = squareFn(sum);
  return square;
}

function e6() {
  const nums = [...range(1, 101)];
  const sumOfSquares1 = sumOfSquares(nums);
  const squareOfSums1 = squareOfSums(nums);
  const diff = squareOfSums1 - sumOfSquares1;
  return diff;
}

export default e6;

// console.assert(e6() === 25164150);
