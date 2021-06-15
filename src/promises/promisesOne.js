const somethingWillHappen = (condition) => {
  return new Promise((resolve, reject) =>
    condition ? resolve('Nice Vim bro.') : reject('F.')
  );
};

somethingWillHappen(true)
  .then((response) => console.log(response))
  .catch((error) => console.error(error));
