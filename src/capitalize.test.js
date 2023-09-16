import capitalize from './capitalize.js';

test('capitalizes the first letter of a one word string', () => {
   expect(capitalize('hello')).toBe('Hello');
});

test('capitalizes the first letter of a multiple words string', () => {
   expect(capitalize('hello world')).toBe('Hello world');
});

test('must be a string', () => {
   function typeTest() {
      capitalize(1);
   }
   expect(typeTest).toThrow('Must be a string');
});

test('reject strings where first char is a numbers', () => {
   function firstLetterTest() {
      capitalize('1hello');
   }
   expect(firstLetterTest).toThrow('First character must be a letter');
});

test('reject empty string', () => {
   function emptyTest() {
      capitalize('');
   }
   expect(emptyTest).toThrow('Must be at least one char');
});
