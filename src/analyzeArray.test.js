import analyzeArray from './analyzeArray.js';

test('returns object with average, min, max, and length', () => {
   expect(analyzeArray([5, 6, 8, 2, 4, 1, 0])).toMatchObject({
      average: expect.any(Number),
      min: expect.any(Number),
      min: expect.any(Number),
      length: expect.any(Number),
   });
});

test('example array result', () => {
   expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
   });
});

test('returns invalid array error if some element is not a number', () => {
   expect(() => analyzeArray([1, 'a', 3, 4, 2, 6])).toThrow('Invalid Array');
});

test('returns invalid array error if array length is less than 1', () => {
   expect(() => analyzeArray([])).toThrow('Invalid Array');
});

test('returns invalid array error if passed argument is not an array', () => {
   expect(() => analyzeArray('string')).toThrow('Invalid Array');
});
