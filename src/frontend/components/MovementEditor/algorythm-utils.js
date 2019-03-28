import uuid from 'uuid/v4';

const deepCopy = obj => JSON.parse(JSON.stringify(obj));

const findStep = (algorythm, stepId) => {
  for (let i = 0; i < algorythm.length; i += 1) {
    const step = algorythm[i];
    if (step.id === stepId) return step;
  }
  return null;
};


export const buildStep = ({ type }) => ({
  id: uuid(),
  type,
});

export const addStep = ({ algorythm, step }) => {
  const newAlgorythm = deepCopy(algorythm);
  newAlgorythm.push(step);
  return newAlgorythm;
};

