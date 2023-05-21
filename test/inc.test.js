const { inc } = require('../src');

describe('Inc', () => {
  it('Should add 1', () => {
    expect(inc(10)).toEqual(11);
  });
});
