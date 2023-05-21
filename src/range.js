const RangeIterable = require('./internal/range-iterable');

function range(from, to, step) {
  return new RangeIterable(from, to, step);
}

module.exports = range;
