// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.

function e9() {
  let done = false;
  let a;
  let b;
  let c;
  for (c = 1; c < Number.MAX_VALUE; c += 1) {
    for (b = 1; b < c; b += 1) {
      for (a = 1; a < b; a += 1) {
        if (a + b + c === 1000 && a * a + b * b === c * c) {
          done = true;
        }
        if (done) {
          break;
        }
      }
      if (done) {
        break;
      }
    }
    if (done) {
      break;
    }
  }
  return a * b * c;
}

export default e9;

// console.assert(e9() === 31875000);
