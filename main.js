/* eslint-disable no-unused-vars */

class Car {
  constructor(direction, speed, location, $car) {
    this.direction = direction
    this.speed = speed
    this.location = location
    this.$car = $car
    window.addEventListener('keypress', event => {
      switch (event.keyCode) {
        case 113 : this.start()
          break
        case 101 : this.stop()
          break
        case 97 : this.turn('west')
            break
        case 119 : this.turn('north')
            break
        case 100 : this.turn('east')
            break
        case 115 : this.turn('south')
            break
      }
    })
  }
  start() {
    const intervalId = setInterval(() => this.move(), 16)
    this.intervalId = intervalId
  }
  stop() {
    clearInterval(this.intervalId)
  }
  turn(newDirection) {
    switch (newDirection) {
      case 'north' : switch (this.direction) {
        case 'east' : this.$car.style.transform = 'rotate(270deg)'
          break
        case 'west' : this.$car.style.transform = 'rotate(270deg)'
          break
      }
        break
      case 'west' : switch (this.direction) {
        case 'north' : this.$car.style.transform = 'rotate(180deg)'
          break
        case 'south' : this.$car.style.transform = 'rotate(180deg)'
          break
      }
        break
      case 'south' : switch (this.direction) {
        case 'east' : this.$car.style.transform = 'rotate(90deg)'
          break
        case 'west' : this.$car.style.transform = 'rotate(90deg)'
          break
      }
        break
      case 'east' : switch (this.direction) {
        case 'north' : this.$car.style.transform = 'rotate(0deg)'
          break
        case 'south' : this.$car.style.transform = 'rotate(0deg)'
          break
      }
        break
    }
    this.direction = newDirection
  }
  accelerate(amount) {
    this.speed += amount
  }
  move() {
    switch (this.direction) {
      case 'north' : this.location[1] -= this.speed
      this.$car.style.top = this.location[1] + 'px'
        break
      case 'west' : this.location[0] -= this.speed
        this.$car.style.left = this.location[0] + 'px'
        break
      case 'south' : this.location[1] += this.speed
        this.$car.style.top = this.location[1] + 'px'
        break
      case 'east' : this.location[0] += this.speed
        this.$car.style.left = this.location[0] + 'px'
        break
    }
  }
  static clone(car) {
    return new this(car.direction, car.speed, car.location.slice())
  }
}

const f1Car = new Car('east', 1, [0, 0], document.getElementById('car'))
