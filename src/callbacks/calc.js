const returnSum = (numberOne = 1, numberTwo = 1) => numberOne + numberTwo;

const calc = (numberOne, numberTwo, callback) => callback(numberOne, numberTwo);

const sumOne = calc(2, 2, returnSum);
console.log(`La suma es ${sumOne}.`);
