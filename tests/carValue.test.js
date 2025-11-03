const getCarValue = require('../Api-1/carValueRoute'); // path must match folder structure

describe('API 1 - Step 1', () => {
  test('Civic 2014 returns 6614', () => {
    const result = getCarValue({ model: "Civic", year: 2014 });
    expect(result).toEqual({ car_value: 6614 });
  });
});

test('C!iv ic 2014 returns 6614 (ignore symbols & spaces)', () => {
  const result = getCarValue({ model: "C!iv ic", year: 2014 });
  expect(result).toEqual({ car_value: 6614 });
});

test('Missing model returns error', () => {
  const result = getCarValue({ year: 2014 });
  expect(result).toEqual({ error: "there is an error" });
});

test('Missing year returns error', () => {
  const result = getCarValue({ model: "Civic" });
  expect(result).toEqual({ error: "there is an error" });
});

test('Jazz 2010 returns 8310', () => {
  const result = getCarValue({ model: "Jazz", year: 2010 });
  expect(result).toEqual({ car_value: 8310 });
});
