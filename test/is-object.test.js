const { isObject } = require('../src');

describe('IsObject', () => {
  it('Should return true if an object is provided', () => {
    expect(isObject({})).toBeTruthy();
  });
  it('Should return false if no object is provided', () => {
    expect(isObject([])).toBeFalsy();
  });
});
