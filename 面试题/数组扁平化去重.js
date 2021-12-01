var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];

// 扁平化去重
function elimination(a, b = []) {
  if (a instanceof Array) {
    a.forEach(item => {
      elimination(item, b)
    })
  } else {
    !b.includes(a) && b.push(a)
  }

  return b
}

const c = elimination(arr)
console.log(c)