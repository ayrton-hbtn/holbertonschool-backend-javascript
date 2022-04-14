/* eslint no-underscore-dangle: 0 */
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["cloneCar"] }] */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const car = new Car();
    return car.cloneCar();
  }
}
