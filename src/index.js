#!/usr/bin/env node
'use strict';

const {
  addition,
  subtraction,
  multiplication,
  division,
} = require('./calculator');

const operationMap = new Map([
  ['addition', addition],
  ['add', addition],
  ['+', addition],
  ['subtraction', subtraction],
  ['subtract', subtraction],
  ['-', subtraction],
  ['multiplication', multiplication],
  ['multiply', multiplication],
  ['x', multiplication],
  ['*', multiplication],
  ['division', division],
  ['divide', division],
  ['/', division],
]);

function usageMessage() {
  return [
    'Usage:',
    '  npm start -- <operation> <left> <right>',
    '  npm start -- <left> <operator> <right>',
    '',
    'Examples:',
    '  npm start -- addition 4 5',
    '  npm start -- 9 / 3',
  ].join('\n');
}

function parseInvocation(argv) {
  if (argv.length !== 3) {
    throw new Error(usageMessage());
  }

  const [first, second, third] = argv;
  const middleOperation = operationMap.get(second.toLowerCase());

  if (middleOperation) {
    return {
      execute: middleOperation,
      left: first,
      right: third,
      label: second,
    };
  }

  const firstOperation = operationMap.get(first.toLowerCase());

  if (firstOperation) {
    return {
      execute: firstOperation,
      left: second,
      right: third,
      label: first,
    };
  }

  throw new Error(`Unsupported operation: ${first} ${second} ${third}\n\n${usageMessage()}`);
}

function main() {
  try {
    const { execute, left, right, label } = parseInvocation(process.argv.slice(2));
    const result = execute(left, right);

    console.log(`${left} ${label} ${right} = ${result}`);
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
