function* range(_start, _stop, _step) {
  // refer: https://stackoverflow.com/a/8273091
  let start = _start;
  let stop = _stop;
  let step = _step;
  if (typeof stop === "undefined") {
    // one param defined
    stop = start;
    start = 0;
  }

  if (typeof step === "undefined") {
    step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
    return;
  }

  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    yield i;
  }
}

function* takeWhile(iterableSeries, whileConditionFn, includeLastItem = false) {
  // from the begining return items.
  // stop when whileContitionFn fails (returns false).
  // whileConditionFn can take a value and index as parameters.
  const iter = iterableSeries[Symbol.iterator]();
  let nextItem;
  let i = -1;
  for (;;) {
    nextItem = iter.next();
    i += 1;
    const { value } = nextItem;
    if (nextItem.done) {
      break;
    }
    if (!whileConditionFn(value, i)) {
      if (includeLastItem) {
        yield value;
      }
      break;
    }
    yield value;
  }
}

function* xfilter(iterableSeries, filterFn) {
  // like filter but for an iterable.
  const iter = iterableSeries[Symbol.iterator]();
  let nextItem;
  let i = -1;
  for (;;) {
    nextItem = iter.next();
    i += 1;
    const { value } = nextItem;
    if (nextItem.done) {
      break;
    }
    if (filterFn(value, i)) {
      yield value;
    }
  }
}

function* xmap(iterableSeries, mapFn) {
  // like map but for an iterable.
  const iter = iterableSeries[Symbol.iterator]();
  let nextItem;
  let i = -1;
  for (;;) {
    nextItem = iter.next();
    i += 1;
    const { value } = nextItem;
    if (nextItem.done) {
      break;
    }
    yield mapFn(value, i);
  }
}

function isPrime(n) {
  // refer to: https://www.mathblog.dk/project-euler-problem-7/
  if (n <= 1) {
    return false;
  }

  if (n === 2) {
    return true;
  }

  if (n % 2 === 0) {
    return false;
  }

  let counter = 3;

  while (counter * counter <= n) {
    if (n % counter === 0) {
      return false;
    }
    counter += 2;
  }

  return true;
}

function isMultiple(n, m) {
  // check if m is a multiple of n
  // isMultiple(9, 3) return true
  if (n % m === 0) {
    return true;
  }
  return false;
}

const isDivisible = isMultiple;

function plusFn(n, m) {
  return n + m;
}

function squareFn(n) {
  return n * n;
}

function isEven(n) {
  if (n % 2 === 0) {
    return true;
  }
  return false;
}

function* fibSeq() {
  let m1 = 1;
  let m2 = 2;

  for (;;) {
    const t1 = m1;
    const t2 = m2;

    m1 = t2;
    m2 = t1 + t2;

    yield t1;
  }
}

function flatten(arr) {
  // return [].concat.apply([], arr);
  return arr.flat();
}

function product(...sets) {
  return sets.reduce(
    (acc, set) => flatten(acc.map((x) => set.map((y) => [...x, y]))),
    [[]]
  );
}

function isPalindrome(_p) {
  let p = _p;
  if (typeof p === "number") {
    p = p.toString();
  }
  const pReverse = p.split("").reverse().join("");
  if (p === pReverse) {
    return true;
  }
  return false;
}

export {
  range,
  takeWhile,
  xfilter,
  xmap,
  isPrime,
  isMultiple,
  isDivisible,
  plusFn,
  squareFn,
  isEven,
  fibSeq,
  product,
  isPalindrome,
};
