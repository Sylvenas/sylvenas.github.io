function MyPromise(fork) {
  let callbacks = [];
  let promise = {
    val: null,
    status: "pending",
    resolve: resolve,
    reject: reject,
    then: then,
    finally: finallyFun,
    catch: catchFun
  };

  function complete(type, result) {
    promise.status = type
    promise.val = callbacks
      ? callbacks.reduce((val, f) => f[type] ? f[type](val) : val, result)
      : promise.val
    callbacks = null;
  }

  function resolve(result) {
    complete('resolve', result);
  }
  function reject(err) {
    complete('reject', err);
  }
  function then(resolve, reject) {
    if (promise.status === "pending") {
      callbacks.push({ resolve, reject });
    } else if (promise.status === "reject") {
      promise.val = reject ? reject(promise.val) : promise.val
    } else {
      promise.val = resolve ? resolve(promise.val) : promise.val
    }
    return promise
  }

  function finallyFun(finalFn) {
    return then(finalFn, finalFn);
  }

  function catchFun(failFn) {
    return then(null, failFn);
  }


  if (fork) {
    fork(resolve, reject)
  }
  return promise;
};

MyPromise.resolve = (p) => {
  if (p.then) {
    return p
  } else {
    return MyPromise((res) => {
      res(p)
    });
  }
}

MyPromise.reject = (p) => {
  if (p.then) {
    return p
  } else {
    return MyPromise((_, rej) => {
      rej(p)
    });
  }
}

MyPromise.all = (pList) => {
  return MyPromise((resolve, reject) => {
    const len = pList.length;
    let done = 0;
    let result = [];
    for (let i = 0; i < len; i++) {
      pList[i].then((val) => {
        done++;
        result[i] = val
        if (done === len) {
          resolve(result);
        }
      }, (err) => {
        reject(err);
      });
    }
  });
}

MyPromise.race = (pList) => {
  return MyPromise((resolve, reject) => {
    const len = pList.length;
    for (let i = 0; i < len; i++) {
      pList[i].then(val => {
        resolve(val);
      }, err => {
        reject(err);
      });
    }
  });
}

const p1 = MyPromise((res, rej) => {
  // rej(1)
  setTimeout(() => rej(1), 5000);
})

const p2 = MyPromise((res, rej) => {
  // rej(2)
  setTimeout(() => res(2), 1000);
})

MyPromise
  .race([p1, p2])
  .then(console.log)
  .catch(x => console.log("catch: " + x))


// let res = MyPromise.resolve(1)
//   .then(x => x + 100, x => x + " err1 ")
//   .then()
//   .catch(x => { console.log("catch:", x); return x })
//   // .then(x => { console.log("resolve:", x); return x },
//   //   (x) => { console.log("reject:", x); return x })
//   .finally(x => console.log("finally:" + x))

// console.log(res)

// MyPromise((res, rej) => {
//   // rej(2)
//   setTimeout(() => res(3), 1000);
// })
//   .then(x => x + 1, (x) => x + "a")
//   .then(x => x * 2, (x) => x + "b")
//   .then(console.log, (x) => console.log("error:", x))


// const p1 = new Promise((res) => { res(1) })
// const p2 = new Promise((res, rej) => { rej(2) })

// p1.then((x) => p2).then(console.log, x => console.log("origin-error:", x))


setTimeout(() => { }, 99999999)
