import uuid from 'uuid/v4';

const deepCopy = obj => JSON.parse(JSON.stringify(obj));

const findStep = (algorythm, stepId) => {
  for (let i = 0; i < algorythm.length; i += 1) {
    const step = algorythm[i];
    if (step.id === stepId) return step;
    if (step.algorythm) {
      const foundStep = findStep(step.algorythm, stepId);
      if (foundStep) return foundStep;
    }
  }
  return null;
};

export const buildStep = ({ type, parent }) => (type === 'loop' ? {
  id: uuid(),
  algorythm: [],
  iterations: 1,
  parentId: parent && parent.id,
  type,
} : {
  id: uuid(),
  parentId: parent && parent.id,
  type,
});

export const addStep = ({ algorythm, step }) => {
  const newAlgorythm = deepCopy(algorythm);
  const parent = findStep(newAlgorythm, step.parentId);
  (parent ? parent.algorythm : newAlgorythm).push(step);
  return newAlgorythm;
};

export const removeStep = ({ algorythm, step }) => {
  const newAlgorythm = deepCopy(algorythm);
  const parent = findStep(newAlgorythm, step.parentId);
  const queue = parent ? parent.algorythm : newAlgorythm;
  const index = queue.findIndex(s => s.id === step.id);
  queue.splice(index, 1);
  return newAlgorythm;
};

export const updateLoopIterations = ({ algorythm, step, iterations }) => {
  const newAlgorythm = deepCopy(algorythm);
  const stepInAlgorythm = findStep(newAlgorythm, step.id);
  stepInAlgorythm.iterations = iterations;
  return newAlgorythm;
};
