const PENDING = Symbol('PENDING');
const FULFILLED = Symbol('FULFILLED');
const REJECTED = Symbol('REJECTED');

class MyPromise {
  constructor(fn) {
    this.fulfilledQueue = [];
    this.rejectedQueue = [];
    this._status = PENDING;
    this._value = null;

    const handleFulfilledQueue = () => {
      while (this.fulfilledQueue.length) {
        let fulfiledFn = this.fulfilledQueue.shift();
        fulfiledFn(this._value);
      };
    };
    const handleRejectedQueue = () => {
      console.log(this.rejectedQueue);
      while (this.rejectedQueue.length) {
        let rejectedFn = this.rejectedQueue.shift();
        rejectedFn(this._value);
      };
    };

    // 完成状态转变，执行回调队列中的回调函数
    const _resolve = (val) => {
      const fn = () => {
        if (this._status !== PENDING) {
          return;
        }
        if (val instanceof MyPromise) {
          val.then((res) => {
            this._status = FULFILLED;
            this._value = res;
            handleFulfilledQueue();
          }, (err) => {
            this._status = REJECTED;
            this._value = err;
            handleRejectedQueue();
          });
        } else {
          this._status = FULFILLED;
          this._value = val;
          handleFulfilledQueue();
        }
      }
      setTimeout(fn, 0);
    }
    // 完成状态Pending到REJECTED的转变，执行rejected队列中的回调函数
    const _reject = (val) => {
      const fn = () => {
        if (this._status !== PENDING) {
          return;
        }
        this._status = REJECTED;
        this._value = val;
        handleRejectedQueue();
      }
      setTimeout(fn, 0);
    }

    try { // 处理外部传入函数执行异常
      fn(_resolve, _reject);
    } catch (e) {

      return _reject(e);
    }
  }

  then(successFn, failFn) {
    return new MyPromise((resolve, reject) => {
      // 执行成功时的回调函数
      const handleSucess = (fn) => {
        try {
          if (typeof fn === 'function') {
            const res = fn(this._value);
            if (res instanceof MyPromise) {
              res.then(resolve, reject);
            } else {
              resolve(res);
            }
          } else {
            resolve(this._value)
          }
        } catch (e) {
          reject(e);
        }
      }
      // 执行失败时的回调函数
      const handleFail = (fn) => {
        try {
          if (typeof fn === 'function') {
            const res = fn(this._value);
            if (res instanceof MyPromise) {
              res.then(resolve, reject);
            } else {
              resolve(res);
            }
          } else {
            reject(this._value);
          }
        } catch (e) {
          reject(e);
        }
      }
      switch (this._status) {
        case PENDING:       // 异步任务尚未完成，将回调函数推入相应队列
          this.fulfilledQueue.push(() => {
            handleSucess(successFn);
          });
          this.rejectedQueue.push(() => {
            handleFail(failFn);
          });
          break;
        case FULFILLED:     // 异步任务成功完成，执行成功回调函数
          handleSucess(successFn);
          break;
        case REJECTED:      // 异步任务已失败，执行失败回调函数
          handleFail(failFn);
          break;
        default:
          console.log('Promise error status:', this._status);
          break;
      };
    });
  }

  catch(failFn) {
    return this.then(null, failFn);
  }

  finally(finalFn) {
    return this.then(finalFn, finalFn);
  }

  static resolve(val) {
    if (val instanceof MyPromise) {
      return val;
    } else {
      return new MyPromise((resolve, reject) => {
        resolve(val);
      });
    }
  }

  static reject(val) {
    return new MyPromise((resolve, reject) => {
      reject(val);
    });
  }

  static all(promiseArr) {
    return new Promise((resolve, reject) => {
      const len = promiseArr.length;
      let count = 0;
      let result = [];
      for (let i = 0; i < len; i++) {
        promiseArr[i].then((val) => {
          count++;
          result.push[val];
          if (count === len) {
            resolve(result);
          }
        }, (err) => {
          reject(err);
        });
      }
    });
  }

  static race(promiseArr) {
    return new Promise((resolve, reject) => {
      const len = promiseArr.length;
      for (let i = 0; i < len; i++) {
        promiseArr[i].then((val) => {
          resolve(val);
        }, (err) => {
          reject(err);
        });
      }
    });
  }
}