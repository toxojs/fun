const curry2 = require('./curry2');
const isFunction = require('./is-function');
const andOp = require('./and-op');

function andFn(...fns) {
  return function andFnRet(...args) {
    let result = true;
    for (let i = 0; i < fns.length; i += 1) {
      const fn = fns[i];
      const value = isFunction(fn) ? fn(...args) : fn;
      result = andOp(result, value);
      if (!value) {
        return false;
      }
    }
    return true;
  };
}

module.exports = curry2(andFn);
