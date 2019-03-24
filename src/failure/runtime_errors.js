const notAFunction = () => {
  const func = 3;
  return func(1, 2, 3);
};

const randomError = () => {
  if (Math.random() < 0.6) {
    throw Error('random error');
  }
};

module.exports = { notAFunction, randomError };
