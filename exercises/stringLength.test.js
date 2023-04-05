const stringLength = require('./stringLength');

test('stringLength returns the correct length of a string', () => {
  expect(stringLength('hello')).toBe(5);
});

test('stringLength throws an error if the string is less than 1 character long', () => {
  expect(() => {
    stringLength('');
  }).toThrow('String must be at least 1 character long');
});

test('stringLength throws an error if the string is more than 10 characters long', () => {
  expect(() => {
    stringLength('this string is too long');
  }).toThrow('String must not be longer than 10 characters');
});
