const { cloneBuffer } = require('../src');

describe('Clone Buffer', () => {
  it('Should clone a buffer', () => {
    const buffer = Buffer.from('123456789abcdefghi');
    const actual = cloneBuffer(buffer);
    expect(actual).not.toBe(buffer);
    expect(actual.toString()).toEqual(buffer.toString());
  });
});
