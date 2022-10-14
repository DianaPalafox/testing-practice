import reverseString from './reverseString.js';

test('Reverse string', () => {
    expect(reverseString('abcdef')).toBe('fedcba')
});