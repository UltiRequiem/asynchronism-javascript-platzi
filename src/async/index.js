const doSomethingAsync = (condition) => {
  return new Promise((resolve, reject) => {
    condition
      ? setTimeout(() => resolve('Do something async.'), 3000)
      : reject(new Error('Duh.'));
  });
};

const doSomething = async (condition) => {
  const something = await doSomethingAsync(condition);
  console.log(something);
};

console.log('Before');
doSomething(true);
console.log('After');
// Before, After, Do something async.
