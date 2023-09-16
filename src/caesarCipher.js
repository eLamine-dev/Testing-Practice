export default function caesarCipher(string, shift) {
   let result = '';
   for (let i = 0; i < string.length; i++) {
      let charCode = string.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {
         charCode = ((charCode - 65 + shift) % 26) + 65;
      } else if (charCode >= 97 && charCode <= 122) {
         charCode = ((charCode - 97 + shift) % 26) + 97;
      }
      result += String.fromCharCode(charCode);
   }
   return result;
}
