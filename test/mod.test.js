const { mod } = require('../src');

describe('Mod', () => {
  it('Should calculate modulus', () => {
    expect(mod(45, 7)).toEqual(3);
  });
});
