export default class calculator {
   checkOperandsType(a, b) {
      if (typeof a !== 'number' || typeof b !== 'number') {
         throw new Error('Operands must be numbers');
      }
   }
   add(a, b) {
      this.checkOperandsType(a, b);
      return a + b;
   }

   subtract(a, b) {
      this.checkOperandsType(a, b);
      return a - b;
   }
   divide(a, b) {
      if (b === 0) throw new Error('Cannot divide by zero');

      this.checkOperandsType(a, b);
      return a / b;
   }

   multiply(a, b) {
      this.checkOperandsType(a, b);
      return a * b;
   }
}
