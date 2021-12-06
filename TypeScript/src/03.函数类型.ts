//  参数后带？表示可有可无  ...args也是同样的   这类参数应放到参数的最后
function hehe(num1: number, num2?: number, ...args: number[]): number {
  return num1 + (num2 || 0)
}
// hehe(1)
hehe(1, 2, 1, 2)

export {}
