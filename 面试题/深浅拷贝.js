const obj = {
  name: 'tk-shop',
  goods: [
    { name: '苹果', price: 100 },
    { name: '香蕉', price: 100 }
  ]
}

/**
 * 浅拷贝： 相当于只改变最外层的内存指向  内部引用数据类型的指向仍是相同的
 *
 * 深拷贝： 不论是那一层的引用数据  指向都是不同的  两个对象内部发生变化互不影响
 */

// 1. 浅
// const obj1 = { ...obj }
// console.log(obj1 === obj, obj1.goods === obj.goods)// false

// const obj1 = Object.assign({}, obj)
// console.log(obj1 === obj, obj1.goods === obj.goods)

// const obj1 = {}
// for(var k in obj) {
//   obj1[k] = obj[k]
// }

// console.log(obj1 === obj, obj1.goods === obj.goods)

// 2.深
const newObj = JSON.parse(JSON.stringify(obj)) // 此方法可以实现一行代码深copy  不过当内部有undefined 会转编为null

// function deepCopy(data) {
//   const backData =  data instanceof Array ? [] : {}

//   for(var k in data) {
//     if (data[k] instanceof Object) {
//       backData[k] = deepCopy(data[k])
//     } else {
//       backData[k] = data[k]
//     }
//   }
//   return backData
// }
// const newObj = deepCopy(obj)

// console.log(newObj)
/**
 * {
 *  name: 'tk-shop',
 *  goods: [ { name: '苹果', price: 100 }, { name: '香蕉', price: 100 } ]
 * }
 */

// console.log(newObj.goods === obj.goods)// false
console.log(newObj.goods[0] === obj.goods[0])