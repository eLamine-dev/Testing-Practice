import reverseString from './reverseString.js';

test('returns reversed string of one word', () => {
   expect(reverseString('hello')).toBe('olleh');
});

test('returns reversed string of multiple words', () => {
   expect(reverseString('hello world')).toBe('dlrow olleh');
});

test('reject non string input', () => {
   expect(() => {
      reverseString(1);
   }).toThrow('Must be a string');
});

test('reject empty string', () => {
   expect(() => {
      reverseString('');
   }).toThrow('Must be at least one char');
});
