const suma = require('./sum');

test('Suma 1+2 debe dar 3', (t) => {
  expect(suma(1, 2)).toBe(3);
});