const traverse = (algorithm, stepCb) => {
  for (let i = 0; i < algorithm.length; i += 1) {
    const step = algorithm[i];
    if (step.type === 'Loop') {
      for (let loopI = 0; loopI < step.iterations; loopI += 1) {
        traverse(step.algorithm, stepCb);
      }
    } else {
      stepCb(step);
    }
  }
};

const executeStep = (linearAlgorithm, stepIndex, stepCb) => {
  const step = linearAlgorithm[stepIndex];
  if (!step) return;

  const next = () => executeStep(linearAlgorithm, stepIndex + 1, stepCb);
  stepCb(step, next);
};

export const execute = (algorithm, stepCb) => {
  const linearAlgorithm = [];
  traverse(algorithm, step => linearAlgorithm.push(step));
  executeStep(linearAlgorithm, 0, stepCb);
};
