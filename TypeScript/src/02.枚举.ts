// enum articleState {
//   done = 0,
//   undone = 1
// }


// 如果不指定对应索引  会默认从0开始
// enum articleState {
//   done,
//   undone
// }

// 如果指定了其中一个的索引  那么则会自动计算
// enum articleState {
//   done = 6,
//   undone
// }

// 如果指定为字符串  则不会自动分配索引
// enum articleState {
//   done = 'yes',
//   undone = 'no'
// }


// 如果枚举项不想影响打包后的结果  可以加上 const 进行声明
const enum articleState {
  done,
  undone
}

const obj = {
  title: '一本书',
  content: '.....',
  state: articleState.done
}


export {}