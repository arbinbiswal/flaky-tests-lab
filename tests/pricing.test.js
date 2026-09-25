const { calculateDiscount } = require('../src/pricing');

afterEach(() => {
  jest.restoreAllMocks();
});

test('calculateDiscount returns a number', () => {
  expect(typeof calculateDiscount()).toBe('number');
});

test('discount is above minimum threshold', () => {
  jest.spyOn(Math, 'random').mockReturnValue(0.5);
  const discount = calculateDiscount();
  expect(discount).toBeGreaterThan(0.05);
});
