const curry2 = require('./curry2');
const boolDict = require('./bool-dict');
const filterSrc = require('./filter-src');

function allowIndexesSrc(x, arr) {
  const dict = boolDict(arr);
  return filterSrc(x, (n, i) => dict[i]);
}

module.exports = curry2(allowIndexesSrc);
