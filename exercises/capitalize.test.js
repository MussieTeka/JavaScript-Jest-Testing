const capitalize = require('./capitalize');

test('capitalize the first character of a string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});
