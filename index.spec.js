const greeting = require('./');

test('salutates properly', () => {
  expect(greeting('Ryo')).toBe('Hello Ryo!');
});
