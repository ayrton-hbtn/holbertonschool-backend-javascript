/* eslint no-underscore-dangle: 0 */
import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof (floors) !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = floors;
  }

  get sqft() {
    return this._sqft;
  }

  get floors() {
    return this._floors;
  }

  set sqft(newSqft) {
    return super.sqft(newSqft);
  }

  set floors(newFloors) {
    if (typeof (floors) !== 'number') {
      throw TypeError('Floors must be a number');
    }
    this._floors = newFloors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
