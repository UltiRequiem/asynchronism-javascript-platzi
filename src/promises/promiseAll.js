const somethingWillHappen = (condition) => {
  return new Promise((resolve, reject) =>
    condition ? resolve('Nice Vim bro.') : reject('F.')
  );
};

const somethingWillHappenTwo = (condition) => {
  return new Promise((resolve, reject) => {
    condition
      ? setTimeout(() => resolve('True'), 2000)
      : reject(new Error('Whops.'));
  });
};

Promise.all([somethingWillHappen(true), somethingWillHappenTwo(true)])
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
