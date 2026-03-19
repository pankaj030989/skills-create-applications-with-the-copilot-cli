'use strict';

// Supported calculator operations:
// - addition
// - subtraction
// - multiplication
// - division
// - modulo
// - power
// - square root

function toNumber(value, name) {
  const parsedValue = Number(value);

  if (!Number.isFinite(parsedValue)) {
    throw new Error(`${name} must be a valid number.`);
  }

  return parsedValue;
}

function addition(left, right) {
  return toNumber(left, 'Left operand') + toNumber(right, 'Right operand');
}

function subtraction(left, right) {
  return toNumber(left, 'Left operand') - toNumber(right, 'Right operand');
}

function multiplication(left, right) {
  return toNumber(left, 'Left operand') * toNumber(right, 'Right operand');
}

function division(left, right) {
  const dividend = toNumber(left, 'Left operand');
  const divisor = toNumber(right, 'Right operand');

  if (divisor === 0) {
    throw new Error('Division by zero is not allowed.');
  }

  return dividend / divisor;
}

function modulo(left, right) {
  const dividend = toNumber(left, 'Left operand');
  const divisor = toNumber(right, 'Right operand');

  if (divisor === 0) {
    throw new Error('Modulo by zero is not allowed.');
  }

  return dividend % divisor;
}

function power(base, exponent) {
  return toNumber(base, 'Base') ** toNumber(exponent, 'Exponent');
}

function squareRoot(value) {
  const operand = toNumber(value, 'Value');

  if (operand < 0) {
    throw new Error('Square root of a negative number is not allowed.');
  }

  return Math.sqrt(operand);
}

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
};
