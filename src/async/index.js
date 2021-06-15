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

console.log('Before One');
doSomething(true);
console.log('After One');

const anotherFunctionTwo = async (condition) => {
  try {
    const something = await doSomethingAsync(condition);
    console.log(something);
  } catch (error) {
    console.error(error);
  }
};

console.log('Before Two');
anotherFunctionTwo(true);
console.log('After Two');
