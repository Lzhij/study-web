export {}

// abstract 标记此类为抽象类   只能使用继承  不能使用new 关键字
abstract class Person {
  eat(food: string): void {
    console.log('吃东西优雅的一批' + food)
  }

  // 当方法身上有 抽象关键词  则子类身上必须要有这个方法
  abstract run(arg1: string): void
}

class Tang extends Person {
  run(arg1: string): void {
    console.log(arg1)
  }
}

let tkk = new Tang()
tkk.eat('屎')
tkk.run('边跑边吃')
