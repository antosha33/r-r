const compose = (...funcs) => (component) => {
  return funcs.reduceRight((prevValue, currentFunction) => {
    return currentFunction(prevValue);
  }, component)
}

export {
  compose,
}