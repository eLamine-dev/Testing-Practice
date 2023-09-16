export default function reverseString(string) {
   if (typeof string !== 'string') {
      throw new Error('Must be a string');
   }
   if (string.length === 0) {
      throw new Error('Must be at least one char');
   }
   return string.split('').reverse().join('');
}
