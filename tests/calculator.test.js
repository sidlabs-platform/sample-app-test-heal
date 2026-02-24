'use strict';

const { add, subtract, multiply, divide, percentage } = require('../src/calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test('adds zero', () => {
      expect(add(5, 0)).toBe(5);
    });
  });

  describe('subtract', () => {
    test('subtracts two numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('returns negative when second is larger', () => {
      expect(subtract(3, 7)).toBe(-4);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(multiply(3, 4)).toBe(12);
    });

    test('multiplies with negative number', () => {
      expect(multiply(-3, 5)).toBe(-15);
    });

    test('multiplies decimal numbers', () => {
      // BUG: Wrong expected value — 2.5 * 4 = 10, not 10.5
      expect(multiply(2.5, 4)).toBe(10.5);
    });
  });

  describe('divide', () => {
    test('divides two numbers', () => {
      expect(divide(10, 2)).toBe(5);
    });

    test('throws on division by zero', () => {
      expect(() => divide(10, 0)).toThrow('Division by zero');
    });
  });

  describe('percentage', () => {
    test('calculates percentage', () => {
      expect(percentage(25, 200)).toBe(12.5);
    });

    test('throws when total is zero', () => {
      expect(() => percentage(5, 0)).toThrow('Total cannot be zero');
    });
  });
});
