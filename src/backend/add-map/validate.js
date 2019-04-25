class ValidationResult {
  constructor() {
    this.errors = [];
  }

  addError = message => this.errors.push(message);

  isValid = () => this.errors.length === 0;
}


export default function validate({ coordinates = '', name = '' }) {
  const result = new ValidationResult();
  if (name.length < 1 || name.length > 60) result.addError('Name cant be empty but also has to be up to 60 chars long');
  if (!/^[a-zA-Z0-9 ]+$/.test(name)) result.addError('Name can include only letters numbers and space');
  if (coordinates.length < 1) result.addError('Coordinates cant be blank');
  // Todo: check if coordinates are valid and if the lvl is solvable
  return result;
}
