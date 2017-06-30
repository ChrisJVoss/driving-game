/* eslint-disable no-unused-vars */

class Car {
  constructor(direction, speed, location, $car) {
    this.direction = direction
    this.speed = speed
    this.location = location
    this.$car = $car
  }
  start() {
    const intervalId = setInterval(() => this.move(), 16)
    this.intervalId = intervalId
  }
  stop() {
    clearInterval(this.intervalId)
  }
  turn(newDirection) {
    this.direction = newDirection
  }
  accelerate(amount) {
    this.speed += amount
  }
  move() {
    switch (this.direction) {
      case 'north' : this.location[1] -= this.speed
        break
      case 'west' : this.location[0] -= this.speed
        break
      case 'south' : this.location[1] += this.speed
        break
      case 'east' : this.location[0] += this.speed
        break
    }
  }
  static clone(car) {
    return new this(car.direction, car.speed, car.location.slice())
  }
}

const f1Car = new Car('east', 1, [0, 0], document.getElementById('car'))
