#!/usr/bin/env node
'use strict';

const {
  addition,
  subtraction,
  multiplication,
  division,
  modulo,
  power,
  squareRoot,
} = require('./calculator');

const operationMap = new Map([
  ['addition', { execute: addition, arity: 2 }],
  ['add', { execute: addition, arity: 2 }],
  ['+', { execute: addition, arity: 2 }],
  ['subtraction', { execute: subtraction, arity: 2 }],
  ['subtract', { execute: subtraction, arity: 2 }],
  ['-', { execute: subtraction, arity: 2 }],
  ['multiplication', { execute: multiplication, arity: 2 }],
  ['multiply', { execute: multiplication, arity: 2 }],
  ['x', { execute: multiplication, arity: 2 }],
  ['*', { execute: multiplication, arity: 2 }],
  ['division', { execute: division, arity: 2 }],
  ['divide', { execute: division, arity: 2 }],
  ['/', { execute: division, arity: 2 }],
  ['modulo', { execute: modulo, arity: 2 }],
  ['mod', { execute: modulo, arity: 2 }],
  ['%', { execute: modulo, arity: 2 }],
  ['power', { execute: power, arity: 2 }],
  ['pow', { execute: power, arity: 2 }],
  ['^', { execute: power, arity: 2 }],
  ['square-root', { execute: squareRoot, arity: 1 }],
  ['sqrt', { execute: squareRoot, arity: 1 }],
  ['√', { execute: squareRoot, arity: 1 }],
]);

function usageMessage() {
  return [
    'Usage:',
    '  npm start -- <operation> <left> <right>',
    '  npm start -- <left> <operator> <right>',
    '  npm start -- <operation> <value>',
    '',
    'Examples:',
    '  npm start -- addition 4 5',
    '  npm start -- 9 / 3',
    '  npm start -- modulo 5 2',
    '  npm start -- 2 ^ 3',
    '  npm start -- sqrt 16',
  ].join('\n');
}

function parseInvocation(argv) {
  if (argv.length === 2) {
    const [operationName, value] = argv;
    const operation = operationMap.get(operationName.toLowerCase());

    if (!operation || operation.arity !== 1) {
      throw new Error(`Unsupported operation: ${operationName} ${value}\n\n${usageMessage()}`);
    }

    return {
      execute: operation.execute,
      values: [value],
      expression: `${operationName} ${value}`,
    };
  }

  if (argv.length !== 3) {
    throw new Error(usageMessage());
  }

  const [first, second, third] = argv;
  const middleOperation = operationMap.get(second.toLowerCase());

  if (middleOperation && middleOperation.arity === 2) {
    return {
      execute: middleOperation.execute,
      values: [first, third],
      expression: `${first} ${second} ${third}`,
    };
  }

  const firstOperation = operationMap.get(first.toLowerCase());

  if (firstOperation && firstOperation.arity === 2) {
    return {
      execute: firstOperation.execute,
      values: [second, third],
      expression: `${first} ${second} ${third}`,
    };
  }

  throw new Error(`Unsupported operation: ${first} ${second} ${third}\n\n${usageMessage()}`);
}

function main() {
  try {
    const { execute, values, expression } = parseInvocation(process.argv.slice(2));
    const result = execute(...values);

    console.log(`${expression} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  main,
};
