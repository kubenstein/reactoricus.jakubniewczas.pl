export default class ValidationResult {
  constructor() {
    this.errors = [];
  }

  addError = message => this.errors.push(message);

  isValid = () => this.errors.length === 0;
}
