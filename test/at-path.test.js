const { atPath } = require('../src');

describe('atPath', () => {
  it('Should extract path tokens from string', () => {
    expect(atPath('[0].a[1].b.c')).toEqual(['[0]', 'a', '[1]', 'b', 'c']);
  });
});
