export const everyPred = (...predFunctions) => {
  return function predict(arg) {
    return predFunctions.every((fn) => fn(arg));
  };
};
