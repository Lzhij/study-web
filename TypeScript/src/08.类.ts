export {}

class Person {
  /**
   * public 动态成员  在类内外都可以访问  默认值
   * private  类的私有成员  只能在类的内部进行访问
   * protected  同样是类的私有成员  不过可以通过继承的方式访问
   */
  public name: string // = 'ny name' 同时也可以给属性赋初始值
  private age: number
  protected gender: boolean

  constructor(name: string, age: number) {
    // 在类中要给实体添加属性需要现在类上添加属性的初始类型
    this.name = name
    this.age = age
    this.gender = false
  }

  sayHi(): void {
    console.log(this.name + this.age + '岁了')
  }
}


let per = new Person('zs', 18)
// per.age // age 是类的私有成员  外部无法访问
// per.gender

class Son extends Person {
  constructor() {
    super('zs', 20)
    console.log(this.gender)// 通过继承  在Son 类中可以使用 Person 中的gender
    // console.log(this.age)  而age是Person的私有成员   只能在Person 中访问
  }
}