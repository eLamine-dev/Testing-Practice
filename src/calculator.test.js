import calculator from './calculator.js';

let calc = new calculator();

describe('calculator', () => {
   test('add', () => {
      expect(calc.add(1, 2)).toBe(3);
   });
   test('subtract', () => {
      expect(calc.subtract(1, 2)).toBe(-1);
   });
   test('multiply', () => {
      expect(calc.multiply(1, 2)).toBe(2);
   });
   test('divide', () => {
      expect(calc.divide(4, 2)).toBe(2);
   });
});

test('divide by zero', () => {
   expect(() => {
      calc.divide(1, 0);
   }).toThrow('Cannot divide by zero');
});

test('operands must be numbers', () => {
   expect(() => {
      calc.add(1, 'a');
   }).toThrow('Operands must be numbers');
});
