interface Eat {
  eat(food: string): void
}

interface Run {
  run(active: string): void
}

class Person implements Eat, Run {
  eat(food: string): void {
    console.log(food)
  }
  run(active: string): void {
    console.log(active)
  }
}
