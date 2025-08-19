const { toCelsius, toFahrenheit } = require('../src/utils/conversions');

describe('toCelsius', () => {
  test('32°F → 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });
  test('−40°F → −40.0°C', () => {
    expect(toCelsius(-40)).toBe(-40.0);
  });
  test('error si no es número', () => {
    expect(() => toCelsius('abc')).toThrow(TypeError);
  });
});

describe('toFahrenheit', () => {
  test('0°C → 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });
  test('100°C → 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });
  test('−40°C → −40.0°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
  });
  test('error si no es número', () => {
    expect(() => toFahrenheit(null)).toThrow(TypeError);
  });
});
