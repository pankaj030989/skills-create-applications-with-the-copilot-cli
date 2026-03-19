'use strict';

// Supported calculator operations:
// - addition
// - subtraction
// - multiplication
// - division

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

module.exports = {
  addition,
  subtraction,
  multiplication,
  division,
};
