const reverseString = require('./reverseString');

test('reverseString reverses a string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
