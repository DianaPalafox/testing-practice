import {calculator} from './calculator.js'

test('two plus two is four', () => {
    expect(calculator.add(2, 2)).toBe(4);
});

test('four minus two is two', () => {
    expect(calculator.subtract(4, 2)).toBe(2);
});

test('Eight divided by two is four', () => {
    expect(calculator.divide(8, 2)).toBe(4);
});

test('Eight multiply by two is sixteen', () => {
    expect(calculator.multiply(8, 2)).toBe(16);
});