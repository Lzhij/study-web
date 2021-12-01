const obj = {
  name: '1',
  children: [
    {
      name: '1-1',
      children: [
        { name: '1-1-1' }
      ]
    }, 
    {
      name: '1-2',
      children: [
        { name: '1-2-1' },
        { name: '1-2-2' },
        { name: '1-2-3', children: [
          { name: '1-2-3-1' }
        ] }
      ]
    },
    {
      name: '1-3',
      children: [
       {
          name: '1-3-1',
          children: [
            { name: '1-3-1-1' }
          ]
       },
       {
         name: '1-3-2'
       }
      ]
    }
  ]
}

// 1. 深度遍历递归函数
function deepMethod(data) {
  const arr = []
  arr.push(data.name)
  if (data.children) {
   data.children.forEach(item => {
      const newArr = deepMethod(item)
      arr.push(...newArr)
    })
  }
  return arr
}

// 2.深度遍历递归函数
// function deepMethod (data, arr =[]) {

//   arr.push(data.name)

//   if (data.children) {
//     data.children.forEach(item => {
//       breadth(item, arr)
//     })
//   }
//   return arr
// }

console.log(deepMethod(obj))

// 广度递归遍历
function breadth (data) {
  let res = []
  let team = [data]
  // team 就是任务队列  先进先出
  while(team.length !== 0) {
    const item = team.shift()
    res.push(item.name)
    if (item.children) {
      item.children.forEach(v => team.push(v))
    }
  }

  return res
}


console.log(breadth(obj))