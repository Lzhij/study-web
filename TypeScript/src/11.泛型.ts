export {}

function createNumberArray(length: number, value: number): Array<number> {
  const arr = Array<number>(length).fill(value)
  return arr
}

createNumberArray(5, 12) // [12, 12, 12, 12, 12]

// 泛型  表示暂时不确定的类型  在传递的时候指定数据的类型
function createArray<T>(length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

createArray<string>(5, '泛型')