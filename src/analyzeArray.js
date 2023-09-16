export default function analyzeArray(array) {
   if (
      !Array.isArray(array) ||
      array.length < 1 ||
      array.some((element) => typeof element !== 'number')
   )
      throw new Error('Invalid Array');

   const average = array.reduce((a, b) => a + b, 0) / array.length;
   const min = Math.min(...array);
   const max = Math.max(...array);
   const length = array.length;
   return { average, min, max, length };
}
