/* eslint no-underscore-dangle: 0 */
export default class Building {
  constructor(sqft) {
    if (typeof (sqft) !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof (sqft) !== 'number') {
      throw TypeError('Sqft must be a number');
    }
    this._sqft = newSqft;
  }

  evacuationWarningMessage() {
    if (this.constructor.name !== 'Building') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
}
