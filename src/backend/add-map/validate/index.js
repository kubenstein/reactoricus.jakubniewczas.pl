import ValidationResult from './validation-result';

const validCoordinatesGrammar = string => (
  (string || '')
    .split('|')
    .map(box => /^(-?\d*),(-?\d*),[01]$/.test(box))
    .filter(valid => !valid)
    .length === 0
);

const hasAtLeastOneBadge = string => (
  (string || '')
    .split('|')
    .filter(box => box.split(',')[2] === '1')
    .length > 0
);

export default function validate({ coordinates = '', name = '' }) {
  const result = new ValidationResult();
  if (name.length < 1 || name.length > 60) result.addError('Name cant be empty but also has to be up to 60 chars long');
  if (!/^[a-zA-Z0-9 ]+$/.test(name)) result.addError('Name can include only letters numbers and space');
  if (coordinates.length < 1) result.addError('Coordinates cant be blank');
  if (!validCoordinatesGrammar(coordinates)) result.addError('Coordinates has to follow "<x>,<y>,<withBadge [1,0]|..." pattern');
  if (!hasAtLeastOneBadge(coordinates)) result.addError('Map has to have at least one badge');
  return result;
}
