function curry(fn) {
  if (typeof fn !== 'function') {
    throw new Error('curry function expected the argument to be a function.')
  }
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      return function (...args2) {
        return curried(...args, ...args2);
      }
    }
  };
}

function partial(fn, ...presetArgs) {
  if (typeof fn !== 'function') {
    throw new Error('curry function expected the argument to be a function.')
  }

  return function partialed(...args) {
    if (args.length + presetArgs.length >= fn.length) {
      return fn(...presetArgs, ...args)
    } else {
      return function (...args2) {
        return partialed(...args, ...args2)
      }
    }
  }
}

const add = (x, y, z) => {
  console.log(x, y, z)
  return x + y + z
}

const partialedAdd = partial(add, 100)

const res = partialedAdd(200)(100)

console.log(res)