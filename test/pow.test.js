const { pow } = require('../src');

describe('Pow', () => {
  it('Should calculate a to the power of b', () => {
    expect(pow(3, 5)).toEqual(243);
  });
});
