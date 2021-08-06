---
title: "函数式编程"
author: [Sylvenas]
categories: 'codes'
img: './img/2015-05-11.jpeg'
secert: true
---

### curry
``` js
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
```

### partial
``` js
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
```

### Box
``` js
const Box = x => ({
  map: f => Box(f(x)),
  chain: f => f(x),
  fold: f=> f(x),
  inspect: () => `Box(${x})`
})
```

``` js
Box(2).map(x => x + 2).map(x => x * 3); // => Box(12)

Box(2).fold(x => x)  // => 4
```

### Either
``` js
const Right = x => ({
    x,
    map: f => Right(f(x)),
    ap: o => o.isLeft ? o : o.map(x),
    chain: f => f(x),
    fold: (f, g) => g(x),
    isLeft: false,
    isRight: true,
    inspect: () => `Right(${x})`
})

const Left = x => ({
    x,
    map: f => Left(x),
    ap: o => o.isLeft ? Left(x.concat(o.x)) : Left(x),
    chain: f => Left(x),
    fold: (f, g) => f(x),
    isLeft: true,
    isRight: false,
    inspect: () => `Left(${x})`
})

const fromNullable = x =>
  x != null ? Right(x) : Left(null)

const tryCatch = (f) => {
  try {
      return Right(f())
  } catch (e) {
      return Left(e)
  }
}
```

``` js
const readConfig = (filepath) =>
    tryCatch(() => fs.readFileSync(filepath))             // Either('')
        .chain(json => tryCatch(() => JSON.parse(json)))  // Either('') 
        .fold(() => '0.0.0', c => c.version)

const result = readConfig('/config.json');
console.log(result) // => '1.0.0'
```

### Maybe
``` js
const Just = x => ({
  map: f => Just(f(x)),
  fold: (f, g) => f(x),
  getOrElse: () => x,
  inspect: () => `Maybe.Just(${x})`,
});

const Nothing = x => ({
  map: f => Nothing(x),
  fold: (f, g) => g(x),
  getOrElse: v => v,
  inspect: () => `Maybe.Nothing`,
});

const Maybe = x =>
  x != null ? Just(x) : Nothing();
```

### LazyBox/IO
``` js
const LazyBox = g => ({
	map: f => LazyBox(() => f(g())),
	fold: f => f(g())
})
```

``` js
const finalPrice = str =>
    LazyBox(() => str)
        .map(x => { console.log('str:', str); return x })
        .map(x => x * 2)
        .map(x => x * 0.8)
        .map(x => x - 50)  

const app = finalPrice(100)
const res = app.fold(x => x)
```

### Applicative
``` js
const Box = x => ({
    map: f => Box(f(x)),
    ap: o => o.map(x),
    flod: f => f(x),
    inspect: () => `Box(${x})`
})
```

``` js
Box(addOne).ap(Box(2)) // => Box(3)

const add = x => y => x + y
Box(add).ap(Box(1))  // => Box(y => 1 + y) (得到另一个应用函子)
Box(add).ap(Box(1)).ap(Box(2))  // => Box(3) (得到最终的结果)
```

### Task
``` js
const Task = fork => ({
  map: f => Task((reject, resolve) =>
    fork(reject, x => resolve(f(x)))),

  chain: f =>
    Task((reject, resolve) => fork(reject, x =>
      f(x).fork(reject, resolve))),

  ap: fn => Task((reject, resolve) => {
        let func, rejected
        const firstState = fork(x => {
            rejected = true;
            return reject(x)
        }, x => func = x)
        const senondState = fn.fork(x => {
            rejected = true;
            return reject(x)
        }, x => {
            if (rejected) return
            return resolve(func(x))
        })
        return [firstState, senondState]
    }),
  fork,
  
  [Symbol.for('nodejs.util.inspect.custom')]: () => 'Task(?)'
})
// lift
Task.of = a => Task((_, resolve) => resolve(a))
```

``` js
const readConfig = filepath => Task((reject, resolve) =>
    fs.readFile(filepath, (err, data) =>
        err ? reject(err) : resolve(data)
    ))

const writeConfig = (filepath, contents) => Task((reject, resolve) => {
    fs.writeFile(filepath, contents, (err, _) =>
        err ? reject(err) : resolve(contents)
    )
})

const app = readConfig(readPath)
    .map(JSON.parse)
    .map(c => ({ version: c.version + 1 }))
    .map(JSON.stringify)
    .chain(c => writeConfig(writeFilepath, c))

app.fork(() => console.log('something went wrong'), 
    () => console.log('read and write config success'))
```