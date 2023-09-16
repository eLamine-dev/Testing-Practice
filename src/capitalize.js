export default function capitalize(string) {
   if (string.length === 0) {
      throw new Error('Must be at least one char');
   }
   if (typeof string !== 'string') {
      throw new Error('Must be a string');
   }
   if (!isNaN(string.charAt(0))) {
      throw new Error('First character must be a letter');
   }

   return string[0].toUpperCase() + string.slice(1);
}
