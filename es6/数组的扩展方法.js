// 1. from 可以将伪数组转化真数组

// let arr = Array.from(new Set([1, 3, 2]))

// console.log(arr)
// Array.from() 还可以接受第二个参数  是一个回调函数  返回回调函数返回的内容组成的数组

// 2. Array.of   可以将一组数据转化成数组
// let arr = Array.of(1, 2, [1, 2], { name: 'zs' })
// console.log(arr)

// 3. copyWithin(目标位置, copy开始的索引, 结束的索引(不包含结束索引项)) 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，不会改变原数组的长度。
// const arr = [1, 2, 3, 4, 5, 6]

// console.log(arr.copyWithin(1, 2, 3)) // 133456
// console.log(arr.copyWithin(0, 1, 3))// 12323456

// 4. find 查找符合条件的元素并返回  找到第一个符合的就会停止遍历

// 5. findIndex  查找第一个符合的元素的索引进行返回

// 6. keys()   values()    entries()   返回一个可以被for of 迭代的遍历器
// const arr = [1, 2, 3, 4, 5, 6]
// for (let i of arr.keys()) {
//   console.log(i)
// }
// for (let v of arr.values()) {
//   console.log(v)
// }
// for (let [k, i] of arr.entries()) {
//   console.log(k, i)
// }


// 7. includes 判断是否判断有该数组元素   返回一个布尔值