export const debounce = (fn, wait = 1000) => {
  let timeout = null;
  return function () {
    if (timeout !== null) {
      setTimeout(timeout);
    }
    timeout = setTimeout(fn, wait);
  };
};

export const debounce2 = (fn, wait = 1000) => {
  let timeNow = Date.now();
  return function () {
    if (timeNow !== null && Date.now() - timeNow > wait) {
      timeNow = Date.now()
      fn()
    }
  };
};