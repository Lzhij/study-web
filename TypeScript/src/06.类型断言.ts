export {}

// 类型断言
const arr: Array<number | string> = [100, 101, 102, 103, '5120']

const res = arr.findIndex(i => i > 102)

// const req: number = (res * res ) as number

const req: number = <number>res * res

/**
 * 类型断言的两种书写方式
 *  res as 数据类型
 *    <数据类型>res   JSX中不能使用
 *      表示该结果是这个类型  不需要 ts 自行判断
 */
