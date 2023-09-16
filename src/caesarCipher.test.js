import caesarCipher from './caesarCipher.js';

test('returns reversed string of one word', () => {
   expect(caesarCipher('hello', 1)).toBe('ifmmp');
});

test('returns reversed string of multiple words', () => {
   expect(caesarCipher('hello world', 3)).toBe('khoor zruog');
});

test('returns reversed string with punctuation', () => {
   expect(caesarCipher('hello world!', 10)).toBe('rovvy gybvn!');
});

test('returns same string when shift is 0', () => {
   expect(caesarCipher('hello world', 0)).toBe('hello world');
});

test('test wrapping from z to a', () => {
   expect(caesarCipher('z', 1)).toBe('a');
});

test('Case satay intact', () => {
   expect(caesarCipher('Hello World', 20)).toBe('Byffi Qilfx');
});
