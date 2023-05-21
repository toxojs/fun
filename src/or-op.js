const isObject = require('./is-object');
const isFunction = require('./is-function');
const { orOpTag } = require('./tags');

function orOp(a, b) {
  if (isObject(a) && isFunction(a.constructor[orOpTag])) {
    return a.constructor[orOpTag](a, b);
  }
  if (isObject(b) && isFunction(b.constructor[orOpTag])) {
    return b.constructor[orOpTag](a, b);
  }
  return a || b;
}

module.exports = orOp;
