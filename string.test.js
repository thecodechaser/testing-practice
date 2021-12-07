const { stringLength, reverseString, capitalize } = require('./js/string');

test('String has 5 characters', () => {
  expect(stringLength('Hello')).toBe(5);
});

test('Returned string is teejnaR', () => {
  expect(reverseString('Ranjeet')).toBe('teejnaR');
});

test('Returned string is Good', () => {
  expect(capitalize('good')).toBe('Good');
});
