'use strict';

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('../calculator');

describe('calculator basic operations', () => {
  describe('addition', () => {
    test('adds the example values from the image', () => {
      expect(addition(2, 3)).toBe(5);
    });

    test('adds decimal values', () => {
      expect(addition(2.5, 1.25)).toBeCloseTo(3.75);
    });

    test('accepts numeric strings', () => {
      expect(addition('7', '8')).toBe(15);
    });

    test('throws for invalid numbers', () => {
      expect(() => addition('abc', 1)).toThrow('Left operand must be a valid number.');
    });
  });

  describe('subtraction', () => {
    test('subtracts the example values from the image', () => {
      expect(subtraction(10, 4)).toBe(6);
    });

    test('subtracts into a negative result', () => {
      expect(subtraction(3, 5)).toBe(-2);
    });

    test('accepts numeric strings', () => {
      expect(subtraction('20', '8')).toBe(12);
    });

    test('throws for invalid numbers', () => {
      expect(() => subtraction(10, 'nope')).toThrow('Right operand must be a valid number.');
    });
  });

  describe('multiplication', () => {
    test('multiplies the example values from the image', () => {
      expect(multiplication(45, 2)).toBe(90);
    });

    test('multiplies with zero', () => {
      expect(multiplication(99, 0)).toBe(0);
    });

    test('multiplies negative values', () => {
      expect(multiplication(-4, 3)).toBe(-12);
    });

    test('throws for invalid numbers', () => {
      expect(() => multiplication({}, 2)).toThrow('Left operand must be a valid number.');
    });
  });

  describe('division', () => {
    test('divides the example values from the image', () => {
      expect(division(20, 5)).toBe(4);
    });

    test('divides decimal values', () => {
      expect(division(7.5, 2.5)).toBe(3);
    });

    test('accepts numeric strings', () => {
      expect(division('18', '6')).toBe(3);
    });

    test('throws for division by zero', () => {
      expect(() => division(10, 0)).toThrow('Division by zero is not allowed.');
    });

    test('throws for invalid numbers', () => {
      expect(() => division(10, 'abc')).toThrow('Right operand must be a valid number.');
    });
  });

  describe('modulo', () => {
    test('matches the extended image example with modulo 5 % 2', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('accepts numeric strings', () => {
      expect(modulo('11', '4')).toBe(3);
    });

    test('throws for modulo by zero', () => {
      expect(() => modulo(10, 0)).toThrow('Modulo by zero is not allowed.');
    });
  });

  describe('power', () => {
    test('matches the extended image example with power 2 ^ 3', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('supports negative exponents', () => {
      expect(power(2, -2)).toBeCloseTo(0.25);
    });

    test('throws for invalid numbers', () => {
      expect(() => power('two', 3)).toThrow('Base must be a valid number.');
    });
  });

  describe('square root', () => {
    test('matches the extended image example with square root of 16', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('supports zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('accepts numeric strings', () => {
      expect(squareRoot('25')).toBe(5);
    });

    test('throws for negative numbers', () => {
      expect(() => squareRoot(-1)).toThrow('Square root of a negative number is not allowed.');
    });

    test('throws for invalid numbers', () => {
      expect(() => squareRoot('abc')).toThrow('Value must be a valid number.');
    });
  });
});
