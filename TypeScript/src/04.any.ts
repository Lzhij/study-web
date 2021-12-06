export {}

// any表示任意类型   当一个变量类型是any时   表示ts不会对他进行类型检查
function stringify(value: any) {
  return JSON.stringify(value)
}

stringify(1)
stringify('0')
stringify(false)

// 同时  如果使用 any 类型的数据给其他类型数据赋值时  即使数据类型不同也是可以赋值的
// 所以 any 类型是不安全的  不推荐使用
let a: any = 123

let b: Array<string>
b = a