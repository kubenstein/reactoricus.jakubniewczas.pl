import uuid from 'uuid/v4';

const deepCopy = obj => JSON.parse(JSON.stringify(obj));

const findStep = (algorithm, stepId) => {
  for (let i = 0; i < algorithm.length; i += 1) {
    const step = algorithm[i];
    if (step.id === stepId) return step;
    if (step.algorithm) {
      const foundStep = findStep(step.algorithm, stepId);
      if (foundStep) return foundStep;
    }
  }
  return null;
};

export const buildStep = ({ type, parent }) => (type === 'Loop' ? {
  id: uuid(),
  algorithm: [],
  iterations: 1,
  parentId: parent && parent.id,
  type,
} : {
  id: uuid(),
  parentId: parent && parent.id,
  type,
});

export const addStep = ({ algorithm, step }) => {
  const newAlgorithm = deepCopy(algorithm);
  const parent = findStep(newAlgorithm, step.parentId);
  (parent ? parent.algorithm : newAlgorithm).push(step);
  return newAlgorithm;
};

export const removeStep = ({ algorithm, step }) => {
  const newAlgorithm = deepCopy(algorithm);
  const parent = findStep(newAlgorithm, step.parentId);
  const queue = parent ? parent.algorithm : newAlgorithm;
  const index = queue.findIndex(s => s.id === step.id);
  queue.splice(index, 1);
  return newAlgorithm;
};

export const updateLoopIterations = ({ algorithm, step, iterations }) => {
  const newAlgorithm = deepCopy(algorithm);
  const stepInalgorithm = findStep(newAlgorithm, step.id);
  stepInalgorithm.iterations = iterations;
  return newAlgorithm;
};
